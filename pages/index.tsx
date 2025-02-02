import React, { useState, ReactElement } from "react";
import { Avatar, WebsiteLayout } from "@components";

const Home = () => {
  const [name, setName] = useState("hafsat");

  return (
    <>
      <Avatar
        name={name}
        onClick={() => {
          setName("Maryam");
        }}
      />
      <p> This is my{name}</p>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Home;
