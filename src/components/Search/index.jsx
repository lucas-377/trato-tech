import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.busca}>
      <input type="text" className={styles.input} placeholder="Pesquisar" />
    </div>
  );
}
