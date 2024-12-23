import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearch, resetSearch } from "store/reducers/search";
import { useLocation } from "react-router-dom";

import styles from "./Search.module.scss";

export default function Search() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetSearch());
  }, [location.pathname]);

  return (
    <div className={styles.busca}>
      <input
        type="text"
        className={styles.input}
        placeholder="Pesquisar"
        value={search}
        onChange={(event) => dispatch(changeSearch(event.target.value))}
      />
    </div>
  );
}
