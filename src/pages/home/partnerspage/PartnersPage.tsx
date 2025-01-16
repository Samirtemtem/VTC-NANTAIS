import React, { useEffect, useState } from "react";
import { Text } from "@/components/text/Text";
import Title from "@/components/text/Title";
import Image from "@/components/image/Image";
import { Theme } from "../../../styles/theme.styles";
import {
  PartnersPageWrapper,
  PartnersPageContainer,
  TitleWrapper,
  IconsWrapper,
} from "./PartnersPage.styles";
import PartnerIcon1 from "../../../assets/images/Partner1.png";
import PartnerIcon2 from "../../../assets/images/Partner2.png";
import PartnerIcon3 from "../../../assets/images/Partner3.png";
import PartnerIcon4 from "../../../assets/images/Partner4.png";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
const PartnersPage = () => {
  const [isWidth, setIsWidth] = useState<boolean>(false);
  const Test = styled(Marquee)`
    margin-left: -24px;
    width: auto;
    display: block;
  `;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsWidth(false);
      } else {
        setIsWidth(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <PartnersPageWrapper backGroundColor={Theme.colors.grey}>
      <PartnersPageContainer>
        <TitleWrapper>
          <Title
            level={2}
            fontColor={Theme.colors.black}
            fontSize="24px"
            fontWeight="500"
          >
            The partners who sell our products
          </Title>
        </TitleWrapper>
        <Test play={isWidth || window.innerWidth < 560}>
          <IconsWrapper>
            <Image
              src={PartnerIcon1}
              alt="partner-1"
              width="auto"
              height="26px"
            />
            <Image
              src={PartnerIcon2}
              alt="partner-2"
              width="auto"
              height="26px"
            />
            <Image
              src={PartnerIcon3}
              alt="partner-3"
              width="auto"
              height="26px"
            />
            <Image
              src={PartnerIcon4}
              alt="partner-4"
              width="auto"
              height="26px"
            />
          </IconsWrapper>
        </Test>
      </PartnersPageContainer>
    </PartnersPageWrapper>
  );
};

export default PartnersPage;
