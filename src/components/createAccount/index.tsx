import React from "react";
import styles from "./createAccount.module.css";
import Image from "next/image";
import createImage from "../../../public/assets/createAccount.svg";
import account from "../../../public/assets/account.svg";

export const CreateAccount = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={createImage} alt="create Account" />
      </div>
      <div className={styles.contentContainer}>
        <span className={styles.getStarted}>
          <Image src={account} alt="" />
          <span className={styles.getStartedText}>How To Get Started</span>
        </span>
        <div className={styles.content}>
          <div className={styles.title}>Create Account</div>
          <div className={styles.subtitle}>
            <span>From sizzling grills to mouthwatering local delicacies,</span>
            <span> get the juiciest, most delicious meals delivered hot </span>
            <span> and fresh on the SmashFood app.</span>
            <span>Don’t wait—download the SmashFood app now and</span>
            <span>indulge in the flavors you love</span>
          </div>
        </div>
      </div>
    </div>
  );
};
