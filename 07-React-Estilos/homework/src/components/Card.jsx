import React from "react";
import Temp from "./Temp";
import style from "./Card.module.css";

export default function Card({ max, min, name, onClose, img, main }) {
  // acá va tu código
  return (
    <div className={[style.card, main ? style.mainCard : ""].join(" ")}>
      <span className={style.name}>{name}</span>
      <button onClose={onClose} className={style.button}>
        X
      </button>
      <section>
        <Temp className={style.temp} label="Min" value={min} />
        <Temp className={style.temp} label="Max" value={max} />
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="icon"
        />
      </section>
    </div>
  );
}
