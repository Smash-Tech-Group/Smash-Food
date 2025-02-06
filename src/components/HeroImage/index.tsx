import React from "react";
import herophone from "../../../public/assets/herophone.svg";
import food from "../../../public/assets/food.svg";
import line from "../../../public/assets/line.svg";
import styles from "./heroImage.module.css";

export const Heroimage = () => {
  return (
    <div className={styles.heroContainer}>
      <img
        src={herophone.src}
        alt="heroImage"
        className={styles.heroPhone}
        width={471}
        height={493}
      />
      <img src={food.src} alt="food" className={styles.food} />
      <img src={line.src} alt="line" className={styles.line} />
    </div>
  );
};
