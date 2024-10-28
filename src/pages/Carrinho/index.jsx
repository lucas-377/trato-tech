import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "store/reducers/cart";
import Header from "components/Header";
import Item from "components/Item";

import styles from "./Carrinho.module.scss";

export default function Carrinho() {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => {
    let total = 0;
    const regexp = new RegExp(state.search, "i");

    const carrinhoReduce = state.cart.reduce((itens, itemNoCarrinho) => {
      const item = state.items.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;

      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }

      return itens;
    }, []);
    return { cart: carrinhoReduce, total };
  });

  return (
    <div>
      <Header
        title="Carrinho de compras"
        description="Confira produtos que você adicionou ao carrinho."
      />

      <div className={styles.carrinho}>
        {cart.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}

        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>

        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetCart())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
