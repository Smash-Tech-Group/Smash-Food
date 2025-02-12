"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hamburger from "../../../public/assets/hambuger.svg";
import openhamburger from "../../../public/assets/openhamburger.svg";
import ellipse from "../../../public/assets/ellipse.svg";
import rectangle from "../../../public/assets/rectangle.svg";
import circle from "../../../public/assets/circle.svg";
import triangle from "../../../public/assets/triangle.svg";
import pinkstar from "../../../public/assets/pinkstar.svg";
import str from "../../../public/assets/str.svg";
import spiral from "../../../public/assets/spiral.svg";
import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useMedia } from "react-use";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={styles.nav}
      >
        <motion.div
          style={{
            opacity: isOpen ? 1 : 0, // Show background only when open
          }}
          className={styles.background}
          variants={sidebarVariants}
        />
        <Navigation />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </motion.nav>
    </div>
  );
}

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
const Navigation = () => (
  <motion.ul className={styles.list} variants={navVariants}>
    {menus.map((menu, i) => (
      <MenuItem key={i} menu={menu} />
    ))}
  </motion.ul>
);

/**
 * ==============   Menu Item Component   ================
 */

const MenuItem = ({ menu }: { menu: { icon: any; title: string } }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.menu}
    >
      <Link href="" className={styles.links}>
        <div className={styles.texts}>
          <Image src={menu.icon} alt="" className={styles.icon} />
          <span className={styles.title}>{menu.title}</span>
        </div>
        <div className={styles.line}></div>
      </Link>
    </motion.div>
  );
};

/**
 * ==============   Menu Toggle Button Component   ================
 */

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  const isTablet = useMedia("(min-width: 481px) and (max-width: 1024px)");

  return (
    <button className={styles.toggleContainer} onClick={toggle}>
      {isTablet ? (
        isOpen ? (
          <img
            src={openhamburger.src}
            alt="Menu"
            className={styles.openHamburger}
            width={48}
          />
        ) : (
          <img
            src={hamburger.src}
            alt="Menu"
            className={styles.hambuger}
            width={42}
          />
        )
      ) : isOpen ? (
        <img
          src={openhamburger.src}
          alt="Menu"
          className={styles.openHamburger}
          width={38}
        />
      ) : (
        <img
          src={hamburger.src}
          alt="Menu"
          className={styles.hambuger}
          width={32}
        />
      )}
    </button>
  );
};
/**
 * ==============   Path Component for SVG Animation   ================
 */
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 4}px at calc(100% - 40px) 40px)`, // Expands from the right
    transition: { type: "spring", stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)", // Stays hidden initially
    transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
  },
};
const navVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  // closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: -0.9,
    transition: { y: { stiffness: 1000, velocity: -300 } },
  },
};

/**
 * ==============   Custom Hook for Measuring Dimensions   ================
 */
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  return dimensions;
};

/**
 * ==============   Styles   ================
 */

const nav: React.CSSProperties = {
  width: "100%",
  height: "100vh", // Ensures it takes full height
  position: "fixed", // Keeps it fixed on screen
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const background: React.CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0, 71, 43, 1)",
  opacity: 0, // Hidden by default
  transition: "opacity 0.3s ease",
};
