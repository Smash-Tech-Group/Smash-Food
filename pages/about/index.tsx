import React, { ReactElement } from "react";
import { DashboardLayout } from "@components/layouts/dashboardLayout";
import { WebsiteLayout } from "@components/index";

const About = () => {
  return <div>About</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default About;
