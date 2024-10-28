import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { changeFavorite } from "store/reducers/items";
import { changeCart, changeQty } from "store/reducers/cart";

import styles from "./Item.module.scss";
import classNames from "classnames";

const iconProps = {
  size: 24,
  color: "#041833",
};

const qtyProps = {
  size: 32,
  color: "#1875E8",
};

export default function Item(props) {
  const { id, titulo, foto, preco, descricao, favorito, carrinho, quantidade } =
    props;

  const dispatch = useDispatch();
  const isOnCart = useSelector((state) =>
    state.cart.some((cartItem) => cartItem.id === id)
  );

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }

  function handleCart() {
    dispatch(changeCart(id));
  }

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={handleFavorite}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={styles["item-acao"]}
                onClick={handleFavorite}
              />
            )}

            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:{" "}
                <AiFillMinusCircle
                  {...qtyProps}
                  onClick={() => {
                    if (quantidade >= 1) {
                      dispatch(changeQty({ id, quantidade: -1 }));
                    }
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, "0")}</span>
                <AiFillPlusCircle
                  {...qtyProps}
                  onClick={() => dispatch(changeQty({ id, quantidade: +1 }))}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                color={isOnCart ? "#1875E8" : iconProps.color}
                className={styles["item-acao"]}
                onClick={handleCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
