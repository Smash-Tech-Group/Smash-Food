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

      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        {/* Show the hamburger or the open hamburger/cancel icon based on the menu state */}
        {!isMenuOpen ? (
          <Image src={hamburger} alt="hamburger" width={26} />
        ) : showOpenHamburger ? (
          <Image src={openhamburger} alt="open hamburger" width={32} />
        ) : (
          <Image src={cancel} alt="cancel" width={20} />
        )}
      </div>

      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
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
      )}
    </div>
  );
};
