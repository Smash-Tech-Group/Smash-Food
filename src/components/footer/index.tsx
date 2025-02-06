import React from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/router";
import ROUTES from "@utils/routes";
import Image from "next/image";
import { Icon } from "@components/icon";
import spiral from "../../../public/assets/spiral.svg";
import ellipse from "../../../public/assets/ellipse.svg";
import str from "../../../public/assets/str.svg";

export const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <section>
          <Icon icon="logo" width={189.71} height={32} />
        </section>
        <section className={styles.section}>
          <span className={styles.heading}>
            <Image src={spiral} alt="spiral" className={styles.icon} />
            Smashfood
          </span>
          <ul>
            <li>Cooked Meals Delivery</li>
            <li>Grocery Delivery</li>
            <li>Raw Food Delivery </li>
          </ul>
        </section>
        <section className={styles.section}>
          <span>
            <Image src={ellipse} alt="spiral" className={styles.icon} />
            Partner With Smashfood
          </span>
          <ul>
            <li>Become a Delivery Agent</li>
            <li>Become a Vendor</li>
            <li>Franchise</li>
          </ul>
        </section>
        <section className={styles.section}>
          <span>
            <Image src={str} alt="spiral" className={styles.icon} />
            Company
          </span>
          <ul>
            <li>About Us</li>
            <li>Contact US</li>
            <li>FAQ’s</li>
          </ul>
        </section>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2025 | Smash Foods All Rights Reserved.</p>
      </div>
    </div>
  );
};
