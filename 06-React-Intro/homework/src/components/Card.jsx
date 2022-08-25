import React from "react";
import Temp from "./Temp";
import styles from "./Card.module.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className={styles.card_weather}>
      <span>{name}</span>
      <button className={styles.close_button} onClose={onClose}>
        X
      </button>
      <div>
        <Temp label="Min" value={min} />
        <Temp label="Max" value={max} />

        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="icono"
        />
      </div>
    </div>
  );
}
