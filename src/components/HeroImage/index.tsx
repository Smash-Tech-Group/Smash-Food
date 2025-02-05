import React from "react";
import Image from "next/image";
import heroPhone from "../../../public/assets/heroPhone.svg";
import food from "../../../public/assets/food.svg";
import line from "../../../public/assets/line.svg";
import styles from "./heroImage.module.css";

export const Heroimage = () => {
  return (
    <div className={styles.heroContainer}>
      <Image src={heroPhone} alt="heroImage" className={styles.heroPhone} />
      <Image src={food} alt="food" className={styles.food} />
      <Image src={line} alt="line" className={styles.line} />
    </div>
  );
};
