import React from "react";
import styles from "./card.module.css";
import { Icon } from "@components/icon";
import { ICard } from "./card";
import { Icons } from "@components/icon/icons";

export const Card: React.FC<ICard> = ({ icons, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon icon={icons} size={24} />
      </div>

      <div>{content}</div>
    </div>
  );
};
