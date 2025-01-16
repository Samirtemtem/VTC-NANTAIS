import React, { useEffect } from "react";

import AboutUsPage from "./aboutuspage/AboutUsPage";
import RegionPage from "../home/regionpage/RegionPage";
import HeroPages from "@/components/heropages/HeroPages";
import DownloadAppPage from "../home/downloadapppage/DownloadAppPage";
import HowItWorksPage from "../home/howitworkspage/HowItWorksPage";
import ShowCasePage from "../home/showcasepage/ShowCasePage";
import PartnersPage from "../home/partnerspage/PartnersPage";
const AboutUs = () => {
  return (
    <>
      <HeroPages name="About Us" />
      <AboutUsPage />
      <ShowCasePage />
      <PartnersPage />
      <RegionPage />
      <HowItWorksPage />
      <DownloadAppPage />
    </>
  );
};

export default AboutUs;
