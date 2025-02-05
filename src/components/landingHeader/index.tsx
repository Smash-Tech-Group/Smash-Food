import React from "react";
import styles from "./landingHeader.module.css";
import { Icon } from "@components/icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@components";
import { useMedia } from "react-use";

export const LandingHeader: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (linkPath: string) => pathname === linkPath;

  return (
    <div className={styles.headerContainer}>
      <div>
        <Icon icon="logo" height={32} width={189.71} className={styles.logo} />
      </div>

      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/" className={styles.nav}>
              <span>Home</span>
              {isActive("/") ? (
                <Icon
                  icon="activeLine"
                  height={9}
                  width={47}
                  className={styles.logo}
                />
              ) : null}
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.nav}>
              <span>About Us</span>
              {isActive("/about") ? (
                <Icon
                  icon="activeLine"
                  height={9}
                  width={47}
                  className={styles.logo}
                />
              ) : null}
            </Link>
          </li>
          <li>
            <Link className={styles.nav} href="/contact">
              <span>Contact Us</span>
              {isActive("/contact") ? (
                <Icon
                  icon="activeLine"
                  height={9}
                  width={47}
                  className={styles.logo}
                />
              ) : null}
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.nav}>
              <span>FAQ's</span>
              {isActive("/faq") ? (
                <Icon
                  icon="activeLine"
                  height={9}
                  width={47}
                  className={styles.logo}
                />
              ) : null}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.button}>
        <Link className={styles.getAppButton} href="">
          Get Started
        </Link>
      </div>
    </div>
  );
};
