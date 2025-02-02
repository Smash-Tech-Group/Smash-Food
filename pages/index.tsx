import React, { useState, ReactElement } from "react";
import { Avatar, WebsiteLayout } from "@components";

const Home = () => {
  const [name, setName] = useState("hafsat");

  return <>Home Page</>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Home;
