import React from "react";
import styles from "./hero.module.css";
import { Icon } from "@components/icon";
import Image from "next/image";
import heroPhone from "../../../public/assets/heroPhone.svg";
import { Button } from "@components/button";

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.blur}></div>
      <div className={styles.title}>
        <div>Savour Naija’s Flavours</div>
        <div>
          with <span className={styles.smash}>Smashfood</span>{" "}
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={heroPhone}
          alt="heroImage"
          height={493}
          width={902.01}
          className={styles.heroPhone}
        />
        <Icon
          icon="outline"
          height={203.07}
          width={267.01}
          className={styles.icon}
        />
      </div>
      <div></div>
    </div>
  );
};
