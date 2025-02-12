import React from "react";
import { useMedia } from "react-use";
import Image from "next/image";
import foodSection from "../../../public/assets/foodSection.svg";
import foodMobile from "../../../public/assets/foodMobile.svg";
import styles from "./qrSection.module.css";
import Link from "next/link";
import qrCode from "../../../public/assets/qrCode.svg";
import playStore from "../../../public/assets/playstore.svg";
import blackApple from "../../../public/assets/blackApple.svg";
import illustration from "../../../public/assets/ilustration.svg";
import { motion } from "framer-motion";

export const QrSection = () => {
  // Using useMedia hook to detect the screen size
  const isMobile = useMedia("(max-width: 480px)");
  const isTablet = useMedia("(min-width: 481px) and (max-width: 1024px)");
  const isDesktop = useMedia("(min-width: 1025px)");

  // Conditionally set the image source based on screen size
  let imageSrc;
  if (isMobile) {
    imageSrc = foodMobile;
  } else if (isTablet) {
    imageSrc = foodMobile;
  } else if (isDesktop) {
    imageSrc = foodSection;
  }
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={styles.container}
    >
      {isDesktop ? (
        <>
          <div>
            <Image
              src={imageSrc}
              alt="foodSection"
              className={styles.foodImage}
            />
          </div>
          <div>
            <Image src={illustration} alt="" className={styles.illustration} />
          </div>
          <div className={styles.text}>
            <span className={styles.title}>Satisfy Your Cravings</span>
            <div className={styles.subTitle}>
              <span>
                From sizzling grills to mouthwatering local delicacies, get the
                juiciest, most
              </span>
              <span>
                delicious meals delivered hot and fresh on the SmashFood app.{" "}
              </span>
              <span>
                Don’t wait—download the SmashFood app now and indulge in the
                flavors{" "}
              </span>
              <span>you love</span>
            </div>
            <div className={styles.qrCode}>
              <Image src={qrCode} alt="qr code" />
            </div>
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
                  src={blackApple}
                  alt="apple"
                  height={24}
                  width={24}
                  className={styles.playstoreIcon}
                />
                Download on App store
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.wrapper}>
          {/* <div>
            <Image src={illustration} alt="" className={styles.illustration} />
          </div> */}
          <div className={styles.firstRow}>
            <span className={styles.title}>Satisfy Your Cravings</span>
            <Image src={foodMobile} alt="foodSection" className={styles.food} />
          </div>
          <div className={styles.subTitle}>
            <span>
              From sizzling grills to mouthwatering local delicacies, get the
              juiciest, most delicious meals delivered hot and fresh on the
              SmashFood app.
            </span>

            <span>
              Don’t wait—download the SmashFood app now and indulge in the
              flavors you love
            </span>
          </div>
          <div className={styles.code}>
            <Image src={qrCode} alt="qrCode" className={styles.image} />
          </div>
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
                src={blackApple}
                alt="apple"
                height={24}
                width={24}
                className={styles.playstoreIcon}
              />
              Download on App store
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};
