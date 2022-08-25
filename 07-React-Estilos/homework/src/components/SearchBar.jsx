import React from "react";
import style from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";
import { BsFillPinMapFill } from "react-icons/bs";

export default function SearchBar({ ciudad }) {
  // acá va tu código
  return (
    <form className={style.searchBar}>
      <BsFillPinMapFill className={style.icon} />
      <input className={style.input} placeholder="Ciudad..." />
      <button className={style.submit} type="submit">
        {" "}
        <GoSearch />
      </button>
    </form>
  );
}
