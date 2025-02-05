import React from "react";
import styles from "./button.module.css";
import { Icon } from "@components/icon";
import { IButton } from "./button";

export const Button: React.FC<IButton> = ({ content, icons }) => {
  return (
    <div className={styles.buttonContainer}>
      <Icon icon={icons} size={24} />
      Download on {content}
    </div>
  );
};
