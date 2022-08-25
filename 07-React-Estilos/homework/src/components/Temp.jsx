import React from "react";
import style from "./Temp.module.css";

export default function Temp({ label, value, className }) {
  return (
    <div className={[style.temp, className].join(" ")}>
      <div className={style.label}>{label}</div>
      <div className={style.value}>{value}</div>
    </div>
  );
}
