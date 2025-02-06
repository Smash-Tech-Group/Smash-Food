import React from "react";
import Image from "next/image";
import herophone from "../../../public/assets/herophone.svg";
import food from "../../../public/assets/food.svg";
import line from "../../../public/assets/line.svg";
import styles from "./heroImage.module.css";

export const Heroimage = () => {
  return (
    <div className={styles.heroContainer}>
      <Image
        src={herophone}
        alt="heroImage"
        className={styles.heroPhone}
        width={471}
        height={493}
        quality={100}
      />
      <Image src={food} alt="food" className={styles.food} />
      <Image src={line} alt="line" className={styles.line} />
    </div>
  );
};
