import React, { useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";
import plus from "../../../public/assets/plus.svg";

const Faq = () => {
  const contents = [
    {
      question: "How do I create an account on SmashFood?",
      answer:
        "Simply enter your phone number and display name to sign up. You'll receive an OTP for verification, and then you’re ready to go!",
    },
    {
      question: "Can I customize my food preferences?",
      answer:
        "Yes! During registration, you can select your favorite foods and specify any allergies so we can personalize your meal recommendations.",
    },
    {
      question: "What payment options are available?",
      answer:
        "You can pay using Paystack (card and bank transfer), cash on delivery, or your in-app SmashFood wallet for seamless transactions.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once you place an order, you can track its progress in real time from preparation to delivery, right within the app.",
    },
    {
      question: "Can I request a personal chef?",
      answer:
        "Yes! With the in-app chef request feature, you can book a chef to prepare meals for you or even cook at your home.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach out to our support team via the in-app chat or email for quick assistance with any issues or inquiries.",
    },
  ];

  // State to track which FAQ answer is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the answer
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.title}>Frequently Asked Questions</div>
      <div className={styles.cardContainer}>
        {contents.map((content, index) => {
          const isOpen = openIndex === index; // Check if this question is open
          return (
            <div key={index}>
              <div className={styles.card}>
                <div
                  className={styles.wrapper}
                  onClick={() => toggleAnswer(index)}
                >
                  <span className={styles.question}>{content.question}</span>
                  <Image
                    src={plus}
                    alt="plus"
                    className={isOpen ? styles.rotated : ""}
                  />
                </div>
                {isOpen && (
                  <div className={styles.answer}>{content.answer}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
