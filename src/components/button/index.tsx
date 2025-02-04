import React from "react";
import styles from "./button.module.css";
import { Icon } from "@components/icon";
import { IButton } from "./button";

export const Button: React.FC<IButton> = ({ hasIcon, icons }) => {
  return (
    <div className={styles.buttonContainer}>
      <span>{hasIcon ? <Icon icon={icons} size={24} /> : null}</span>
      Download on Google Play
    </div>
  );
};
