import React, { useState, useEffect } from "react";
import styles from "./createAccount.module.css";
import Image from "next/image";
import createImage from "../../../public/assets/createAccount.png";
import favourite from "../../../public/assets/favorites.png";
import allergies from "../../../public/assets/allergies.png";
import ordering from "../../../public/assets/order.png";
import account from "../../../public/assets/account.svg";
import back from "../../../public/assets/back.svg";
import forward from "../../../public/assets/forward.svg";
import greenRectangle from "../../../public/assets/greenRectangle.svg";
import whiteRectangle from "../../../public/assets/whiteRectangle.svg";

export const CreateAccount = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const slides = [
    {
      image: createImage,
      title: "Create Account",
      subtitle: (
        <>
          <span>Simply enter your phone number and display name</span>
          <span> to set up your SmashFood account in seconds. No </span>
          <span> hassle, just quick access.</span>
        </>
      ),
    },
    {
      image: favourite,
      title: "Select Favorites",
      subtitle: (
        <>
          <span>Choose your favorite meals so we can personalize</span>
          <span> your experience and show you the best food options </span>
          <span> you’ll love.</span>
        </>
      ),
    },
    {
      image: allergies,
      title: "Select Allergies",
      subtitle: (
        <>
          <span>Let us know about any allergies you have so we can</span>
          <span> filter out meals that may not be suitable for you.</span>
        </>
      ),
    },
    {
      image: ordering,
      title: "Place Order",
      subtitle: (
        <>
          <span>Explore a variety of delicious meals, place your first </span>
          <span> order, and enjoy fast, fresh, and satisfying food</span>
          <span> delivered to your doorstep.</span>
        </>
      ),
    },
  ];

  // Move to the next slide automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle through the slides, ensures infinite loop
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  // Handle next and previous slide on button click with infinite looping
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Infinite loop logic
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Infinite loop logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={slides[currentSlide].image.src}
          alt="Slide Image"
          className={styles.account}
        />
      </div>
      <div className={styles.contentContainer}>
        <span className={styles.getStarted}>
          <Image src={account} alt="Account" className={styles.star} />
          <span className={styles.getStartedText}>How To Get Started</span>
        </span>
        <div className={styles.content}>
          <div className={styles.title}>{slides[currentSlide].title}</div>
          <div className={styles.subtitle}>{slides[currentSlide].subtitle}</div>

          {/* Arrows */}
          <div className={styles.arrows}>
            <div className={styles.button} onClick={handlePrevSlide}>
              <Image src={back} alt="back" />
            </div>
            <div className={styles.button} onClick={handleNextSlide}>
              <Image src={forward} alt="forward" />
            </div>
          </div>

          {/* Slide Indicators */}
          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <Image
                key={index}
                src={index === currentSlide ? greenRectangle : whiteRectangle}
                alt={`Indicator ${index + 1}`}
                className={styles.indicator}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
