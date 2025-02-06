import React from "react";
import styles from "./hero.module.css";
import { Icon } from "@components/icon";
import Image from "next/image";
import heroPhone from "../../../public/assets/heroPhone.svg";
import playStore from "../../../public/assets/playstore.svg";
import apple from "../../../public/assets/apple.svg";
import { Button } from "@components/button";
import Link from "next/link";
import { useMedia } from "react-use";
import { Heroimage } from "@components/HeroImage";
import { motion } from "framer-motion";

export const Hero = () => {
  const isTablet = useMedia("(max-width: 560px)");
  const isMobile = useMedia("(max-width: 558px)");

  return (
    <div className={styles.heroContainer}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className={styles.title}
      >
        <div>Savour Naija’s Flavours</div>
        <div>
          with <span className={styles.smash}>SmashFood</span>{" "}
        </div>
      </motion.div>
      {/* <div className={styles.image}>
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
      </div> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className={styles.heroImage}
      >
        <Heroimage />
      </motion.div>

      <div className={styles.buttons}>
        <Link href="" className={styles.playstoreButton}>
          <Image
            src={playStore}
            alt="playstore"
            height={24}
            width={24}
            className={styles.playstoreIcon}
          />
          Download on Google Play
        </Link>
        <Link href="" className={styles.playstoreButton}>
          <Image
            src={apple}
            alt="apple"
            height={26}
            width={26}
            className={styles.playstoreIcon}
          />
          Download on App store
        </Link>
      </div>
      <div className={styles.blur}></div>
    </div>
  );
};
