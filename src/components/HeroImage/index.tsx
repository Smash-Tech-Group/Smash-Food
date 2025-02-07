import React from "react";
import Image from "next/image";
import herophone from "../../../public/assets/heroPhone.png";
import food from "../../../public/assets/food.svg";
import line from "../../../public/assets/line.svg";
import styles from "./heroImage.module.css";
import { useMedia } from "react-use";

export const Heroimage = () => {
  const isMobile = useMedia("(max-width: 480px)");
  const isTablet = useMedia("(min-width: 481px) and (max-width: 768px)");
  const isDesktop = useMedia("(min-width: 769px)");

  return (
    <div className={styles.heroContainer}>
      {/* {isMobile ? (
        <Image
          src={herophone}
          alt="heroImage"
          width={180}
          height={197.2}
          unoptimized={true}
          quality={100}
        />
      ) : isTablet ? (
        <Image
          src={herophone}
          alt="heroImage"
          className={styles.heroPhone}
          width={211.95}
          height={221.85}
          unoptimized={true}
          quality={100}
        />
      ) : (
        <Image
          src={herophone}
          alt="heroImage"
          className={styles.heroPhone}
          width={471}
          height={493}
          unoptimized={true}
          quality={100}
        />
      )} */}
      <img
        src={herophone.src}
        alt="heroImage"
        className={styles.heroPhone}
        width={471}
        height={493}
      />

      <Image src={food} alt="food" className={styles.food} />
      <Image src={line} alt="line" className={styles.line} />
    </div>
  );
};
