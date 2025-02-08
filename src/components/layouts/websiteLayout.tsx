import React from "react";
import { LandingHeader, Footer } from "@components";
import { DropdownProvider } from "src/context/dropdownContext";
import { DropDown } from "@components/dropDown";

export const WebsiteLayout = ({ children }: any) => {
  return (
    <>
      <DropDown />
      <LandingHeader />

      <main>{children}</main>
      <Footer />
    </>
  );
};
