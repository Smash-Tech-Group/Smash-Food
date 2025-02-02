import React, { ReactElement } from "react";
import { DashboardLayout } from "@components/layouts/dashboardLayout";

const About = () => {
  return <div>About</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default About;
