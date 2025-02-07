import React, { ReactElement } from "react";
import { WebsiteLayout } from "@components/index";
import styles from "./contact.module.css";

const Contact = () => {
  return <div className={styles.container}>Contact Us</div>;
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Contact;
