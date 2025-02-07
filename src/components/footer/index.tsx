import React from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/router";
import ROUTES from "@utils/routes"; // Assuming you have this utility
import Image from "next/image";
import { Icon } from "@components/icon"; // Assuming you use this icon component
import spiral from "../../../public/assets/spiral.svg";
import ellipse from "../../../public/assets/ellipse.svg";
import str from "../../../public/assets/str.svg";
import logo from "../../../public/assets/logo.svg";
import twitter from "../../../public/assets/twitter.svg";
import instagram from "../../../public/assets/instagram.svg";
import tiktok from "../../../public/assets/tiktok.svg";
import linkedin from "../../../public/assets/linkedin.svg";
import facebook from "../../../public/assets/facebook.svg";
import Link from "next/link";
import playStore from "../../../public/assets/playstore.svg";
import apple from "../../../public/assets/apple.svg";

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <section>
          <Image src={logo} alt="logo" className={styles.logo} />
        </section>
        <section className={styles.section}>
          <span className={styles.heading}>
            <Image src={spiral} alt="spiral" className={styles.icon} />
            Smashfood
          </span>
          <ul>
            <li>Cooked Meals Delivery</li>
            <li>Grocery Delivery</li>
            <li>Raw Food Delivery</li>
          </ul>
        </section>
        <section className={styles.section}>
          <span className={styles.heading}>
            <Image src={ellipse} alt="ellipse" className={styles.icon} />
            Partner With Smashfood
          </span>
          <ul>
            <li>Become a Delivery Agent</li>
            <li>Become a Vendor</li>
            <li>Franchise</li>
          </ul>
        </section>
        <section className={`${styles.section} ${styles.companySection}`}>
          <span className={styles.heading}>
            <Image src={str} alt="str" className={styles.icon} />
            Company
          </span>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ’s</li>
          </ul>
        </section>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.icons}>
          <Image src={twitter} alt="Twitter" className={styles.icn} />
          <Image src={instagram} alt="Instagram" className={styles.icn} />
          <Image src={tiktok} alt="TikTok" className={styles.icn} />
          <Image src={linkedin} alt="LinkedIn" className={styles.icn} />
          <Image src={facebook} alt="Facebook" />
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
              src={apple}
              alt="apple"
              height={26}
              width={26}
              className={styles.playstoreIcon}
            />
            Download on App store
          </Link>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.copyright}>
        <div>&copy; 2025 Smash Foods</div>
        <div className={styles.terms}>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Cookies Policy</div>
        </div>
      </div>
    </div>
  );
};
