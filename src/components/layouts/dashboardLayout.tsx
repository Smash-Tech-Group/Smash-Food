import React from "react";
import { Nav, Footer } from "@components";

export const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
