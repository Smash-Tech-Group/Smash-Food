import React from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/router";
import ROUTES from "@utils/routes";

export const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <section className={styles.section}>
          <h4>Product</h4>
          <ul>
            <li onClick={() => router.push(ROUTES.ABOUT)}>Features</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Help Center</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h4>Contact</h4>
          <ul>
            <li>Email</li>
            <li>Support</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </section>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2025 | Smash Foods All Rights Reserved.</p>
      </div>
    </div>
  );
};
