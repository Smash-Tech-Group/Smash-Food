import React from "react";
import { LandingHeader, Footer } from "@components";

export const WebsiteLayout = ({ children }: any) => {
  return (
    <>
      <LandingHeader />

      <main>{children}</main>
      <Footer />
    </>
  );
};
