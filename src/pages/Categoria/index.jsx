import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "components/Header";
import Item from "components/Item";

import styles from "./Categoria.module.scss";

export default function Categoria() {
  const { nomeCategoria } = useParams();

  const { category, items } = useSelector((state) => ({
    category: state.categories.find(
      (category) => category.id === nomeCategoria
    ),
    items: state.items.filter((item) => item.categoria === nomeCategoria),
  }));

  return (
    <div>
      <Header
        title={category.nome}
        description={category.descricao}
        image={category.header}
      />

      <div className={styles.itens}>
        {items?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
