import React, { useState } from "react";
import styles from "./landingHeader.module.css";
import { Icon } from "@components/icon";
import Link from "next/link";
import { useRouter } from "next/router";
import hamburger from "../../../public/assets/hambuger.svg";
import openhamburger from "../../../public/assets/openhamburger.svg";
import cancel from "../../../public/assets/cancel.svg"; // Assuming you have a cancel image
import Image from "next/image";
import { Button } from "@components";
import { useMedia } from "react-use";
import { useScroll } from "../../hooks/useScroll";
import logo from "../../../public/assets/logo.svg";

export const LandingHeader: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOpenHamburger, setShowOpenHamburger] = useState(false);

  const isActive = (linkPath: string) => pathname === linkPath;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Show the open hamburger icon temporarily for 500ms
    setShowOpenHamburger(true);

    setTimeout(() => {
      setShowOpenHamburger(false); // Hide after 500ms
    }, 300);
  };

  const { scrollY, scrollX, scrollDirection, atTop } = useScroll();

  type CSSProperties = {
    visibility: "visible" | "hidden" | "collapse";
    transition: string;
    transform?: string; // transform is optional
  };

  const styling: {
    active: CSSProperties;
    hidden: CSSProperties;
  } = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };

  return (
    <div
      style={
        atTop || scrollDirection === "down" ? styling.active : styling.hidden
      }
      className={styles.headerContainer}
    >
      <div>
        <Image src={logo} alt="logo" className={styles.logo} />
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

      <div
        className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Image src={openhamburger} alt="open" width={42} />
        ) : (
          <Image src={hamburger} alt="close" width={32} />
        )}
      </div>

      <div className={`${styles.dropdownMenu} ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/" className={styles.nav}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.nav}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.nav}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.nav}>
              FAQ's
            </Link>
          </li>
          <li>
            <Link className={styles.getAppButton} href="">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
