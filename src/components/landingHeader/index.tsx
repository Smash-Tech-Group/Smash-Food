import React, { useState, useEffect } from "react";
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
import logo from "../../../public/assets/logo.png";
import cart from "../../../public/assets/cart.svg";
import wigly from "../../../public/assets/wigly.svg";
import { DropDown } from "@components/dropDown";
import { useDropdown } from "src/context/dropdownContext";

export const LandingHeader: React.FC = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { toggleDropdown, closeDropdown } = useDropdown();
  const router = useRouter();
  const { pathname } = router;

  const isActive = (linkPath: string) => pathname === linkPath;

  const { scrollY, scrollX, scrollDirection, atTop } = useScroll();

  type CSSProperties = {
    visibility: "visible" | "hidden" | "collapse";
    transition: string;
    transform?: string;
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
  const scrollToFaq = (e: any) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/").then(() => {
        setTimeout(() => {
          document
            .getElementById("faq")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      });
    } else {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={
        atTop || scrollDirection === "up" ? styling.active : styling.hidden
      }
      className={styles.headerContainer}
    >
      <div>
        <img src={logo.src} alt="logo" className={styles.logo} />
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
            <a href="#faq" onClick={scrollToFaq} className={styles.nav}>
              <span>FAQ's</span>
              {isActive("#faq") ? (
                <Icon
                  icon="activeLine"
                  height={9}
                  width={47}
                  className={styles.logo}
                />
              ) : null}
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.button}>
        <Link className={styles.getAppButton} href="">
          <Image
            src={wigly}
            alt=""
            height={46.63}
            width={94.36}
            className={styles.wigly}
          />
          <Image src={cart} alt="cart" height={24} width={24} />
          Store
        </Link>
      </div>

      <Image
        key={Number(openHamburger)}
        src={hamburger}
        alt="menu"
        width={32}
        onClick={() => {
          setOpenHamburger((prev) => !prev);
          toggleDropdown();
        }}
        className={`${styles.burger} ${
          openHamburger ? styles.moveBurger : styles.showBurger
        }`}
      />
    </div>
  );
};
