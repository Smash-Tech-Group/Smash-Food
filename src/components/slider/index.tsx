import React from "react";
import styles from "./slider.module.css";
import Image from "next/image";
import spiral from "../../../public/assets/spiral.svg";
import polygon from "../../../public/assets/polygon.svg";
import star from "../../../public/assets/star.svg";
import support from "../../../public/assets/support.svg";
import deals from "../../../public/assets/deals.svg";

const slides = [
  { img: deals, content: "Exclusive Deals" },
  { img: spiral, content: "Wide Cuisine Selection" },
  { img: polygon, content: "User-Friendly Interface" },
  { img: star, content: "Seasonal Specials" },
  { img: support, content: "Responsive Customer Support" },
  { img: deals, content: "Nutritional Information" },
];

export default function CustomSlider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.titles}>
        <span className={styles.title}>
          We believe food delivery should be more than
        </span>
        <span className={styles.title}>
          just convenient—it should be an experience.
        </span>
        <span className={styles.title}>
          Here's what makes SmashFood stand out
        </span>
      </div>

      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {[...slides, ...slides].map((slide, index) => (
            <div key={index} className={styles.card}>
              <div>
                <Image
                  src={slide.img}
                  alt={slide.content}
                  className={styles.image}
                />
              </div>
              <div>{slide.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
