import React from "react";
import {
  ImagesWrapper,
  RegionPageContainer,
  RegionPageWrapper,
  TextWrapper,
  ImageWrapper,
  MapBackGround,
  BackGroundBlur,
} from "./RegionPage.styles";
import Image from "@/components/image/Image";
import DubaiImage from "../../../assets/images/DubaiImage.png";
import ChicagoImage from "../../../assets/images/ChicagoImage.png";
import DetroitImage from "../../../assets/images/DetroitImage.png";
import Title from "@/components/text/Title";
import { Theme } from "../../../styles/theme.styles";
import { Paragraph } from "@/components/text/Paragraph";
import ActionButton from "@/components/button/ActionButton";
import { Text } from "@/components/text/Text";
import TopRightArrowWhite from "../../../assets/images/TopRightArrowWhite.png";
import MapBackground from "../../../assets/images/MapBackGround.png";
import { Link } from "react-router-dom";
const RegionPage = () => {
  return (
    <RegionPageWrapper>
      <RegionPageContainer>
        <ImagesWrapper>
          <ImageWrapper gridRow="1 / span 2" backGroundImage={DubaiImage} />
          <ImageWrapper backGroundImage={ChicagoImage} />
          <ImageWrapper backGroundImage={DetroitImage} />
        </ImagesWrapper>
        <TextWrapper>
          <Title
            level={2}
            fontColor={Theme.colors.baseBlack}
            fontSize="44px"
            fontWeight="500"
          >
            From the region, for the region
          </Title>
          <Paragraph fontSize="16px" fontColor={Theme.colors.baseBlack}>
            Superide operates in more than 120 cities in 18 countries from
            Morocco to Pakistan.
          </Paragraph>
          <Link to="/">
            <ActionButton borderRadius="6px">
              <Text fontSize="16px" fontColor={Theme.colors.white}>
                View All Cities
              </Text>

              <Image
                src={TopRightArrowWhite}
                alt="top-right-arrow"
                width="12px"
              />
            </ActionButton>
          </Link>
        </TextWrapper>
      </RegionPageContainer>
      <BackGroundBlur />
      <MapBackGround backGroundImage={MapBackground} />
    </RegionPageWrapper>
  );
};

export default RegionPage;
