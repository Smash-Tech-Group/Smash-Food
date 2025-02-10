import React from "react";
import styles from "./dropDown.module.css";
import Image from "next/image";
import Link from "next/link";
import wigly from "../../../public/assets/wigly.svg";
import greenCart from "../../../public/assets/greenCart.svg";
import whiteCancel from "../../../public/assets/whiteCancel.svg";
import spiral from "../../../public/assets/spiral.svg";
import ellipse from "../../../public/assets/ellipse.svg";
import rectangle from "../../../public/assets/rectangle.svg";
import circle from "../../../public/assets/circle.svg";
import triangle from "../../../public/assets/triangle.svg";
import pinkstar from "../../../public/assets/pinkstar.svg";
import openhamburger from "../../../public/assets/openhamburger.svg";
import str from "../../../public/assets/str.svg";
import { useDropdown } from "src/context/dropdownContext";

export const DropDown = () => {
  const { isOpen, closeDropdown } = useDropdown();
  const menus = [
    {
      icon: spiral,
      title: "Home",
    },
    {
      icon: ellipse,
      title: "About Us",
    },
    {
      icon: str,
      title: "Contact Us",
    },
    {
      icon: pinkstar,
      title: "FAQ's",
    },
    {
      icon: rectangle,
      title: "Cooked Meals Delivery",
    },
    {
      icon: triangle,
      title: "Raw Food Delivery",
    },
    {
      icon: circle,
      title: "Grocery Delivery",
    },
  ];

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.buttons}>
        <Link className={styles.getAppButton} href="">
          <Image
            src={wigly}
            alt=""
            height={46.63}
            width={94.36}
            className={styles.wigly}
          />
          <Image src={greenCart} alt="cart" height={24} width={24} />
          Store
        </Link>
        <div
          className={`${styles.hamburgerInside} ${
            isOpen ? styles.showBurger : styles.hideBurger
          }`}
        >
          <Image
            src={openhamburger}
            alt="cart"
            width={40}
            onClick={closeDropdown}
            className={styles.hamburger}
          />
        </div>
      </div>

      <div className={styles.menus}>
        {menus.map((menu) => {
          return (
            <div className={styles.menu}>
              <Link href="" className={styles.links}>
                <div>
                  <Image src={menu.icon} alt="" className={styles.icon} />
                  <span>{menu.title}</span>
                </div>
              </Link>
              <div className={styles.line}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
