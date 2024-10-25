import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { changeFavorite } from "store/reducers/items";

import styles from "./Item.module.scss";

const iconProps = {
  size: 24,
  color: "#041833",
};

export default function Item(props) {
  const { id, titulo, foto, preco, descricao, favorito } = props;

  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }

  return (
    <div className={styles.item}>
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
            <FaCartPlus
              {...iconProps}
              color={false ? "#1875E8" : iconProps.color}
              className={styles["item-acao"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
