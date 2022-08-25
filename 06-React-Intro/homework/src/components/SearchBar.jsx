import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <form className={styles.searchBar}>
      <input placeholder="Ciudad..." />
      <input type="submit" value="Agregar" />
    </form>
  );
}
