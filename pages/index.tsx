import React, { useState, ReactElement } from "react";
import Script from "next/script";
import { WebsiteLayout, Card } from "@components";
import { Icon } from "@components/icon";
import { useMedia } from "react-use";
import { Button } from "@components/button";
import { Hero } from "@components";

const Home = () => {
  const [name, setName] = useState("hafsat");
  const isMobile = useMedia("(max-width: 768px)");

  const cards = [
    {
      icon: "",
      content: "Exclusive Deals",
    },
    {
      icon: "",
      content: "Exclusive Deals",
    },
    {
      icon: "",
      content: "Wide Cuisine Selection",
    },
    {
      icon: "",
      content: "User-Friendly Interface",
    },

    {
      icon: "",
      content: "Seasonal Specials",
    },

    {
      icon: "",
      content: "Responsive Customer Support",
    },
  ];

  return (
    <div>
      <Hero />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Home;
