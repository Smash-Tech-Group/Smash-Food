import React, { ReactElement } from "react";
import { WebsiteLayout } from "@components/index";
import styles from "./about.module.css";

const About = () => {
  return <div className={styles.container}>About Us</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default About;
