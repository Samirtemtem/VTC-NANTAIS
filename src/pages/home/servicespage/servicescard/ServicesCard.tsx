import React, { useState } from "react";
import {
  ServicesCardWrapper,
  ServicesCardContainer,
  ServicesBackGroundColor,
  ParagraphWrapper,
} from "./Services.styles";
import { Theme } from "../../../../styles/theme.styles";
import Title from "@/components/text/Title";
import { Paragraph } from "@/components/text/Paragraph";

interface ServicesCardProps {
  title: string;
  subText: string;
  url: string;
}

const ServicesCard = ({ title, subText, url }: ServicesCardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <ServicesCardWrapper
      url={url}
      backGroundColor={Theme.colors.white}
      onMouseEnter={() => setIsVisible(!isVisible)}
      onMouseLeave={() => setIsVisible(!isVisible)}
    >
      <ServicesCardContainer>
        <Title level={3} fontColor={Theme.colors.white} fontSize="18px">
          {title}
        </Title>
        <ParagraphWrapper isVisible={isVisible}>
          <Paragraph
            fontSize="14px"
            fontWeight="500"
            fontColor={Theme.colors.white}
          >
            {subText}
          </Paragraph>
        </ParagraphWrapper>
      </ServicesCardContainer>
      <ServicesBackGroundColor />
    </ServicesCardWrapper>
  );
};

export default ServicesCard;
