import React from "react";
import {
  ServicesPageContainer,
  ServicesPageWrapper,
  ServicesTitleContainer,
  MoreServicesContainer,
} from "./ServicesPage.styles";

import Title from "@/components/text/Title";
import Image from "@/components/image/Image";
import { Text } from "@/components/text/Text";
import { Theme } from "@/styles/theme.styles";
import TopRightArrow from "@/assets/images/TopRightArrow.png";
import { Link } from "react-router-dom";
import ServicesCard from "./servicescard/ServicesCard";
import { ServicesData } from "./ServicesData";
import SlideShow from "@/components/slideshow/SlideShow";
import { title } from "process";
const ServicesPage = () => {
  return (
    <ServicesPageWrapper>
      <ServicesPageContainer>
        <ServicesTitleContainer>
          <Title
            level={2}
            fontColor={Theme.colors.baseBlack}
            fontSize="44px"
            fontWeight="500"
          >
            Services
          </Title>
          <Link to="/services">
            <MoreServicesContainer>
              
              <Image src={TopRightArrow} width="12px" alt="top-right-arrow" />
            </MoreServicesContainer>
          </Link>
        </ServicesTitleContainer>
        <SlideShow data={ServicesData.length}>
          {ServicesData.map(({ title, subtext, url }, index) => (
            <ServicesCard
              title={title}
              subText={subtext}
              url={url}
              key={index}
            />
          ))}
        </SlideShow>
      </ServicesPageContainer>
    </ServicesPageWrapper>
  );
};

export default ServicesPage;
