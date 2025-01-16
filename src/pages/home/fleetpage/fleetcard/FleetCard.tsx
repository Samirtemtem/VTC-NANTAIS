import React from "react";
import {
  FleetCardWrapper,
  FleetCardContainer,
  TextWrapper,
  ImageWrapper,
  FeaturesWrapper,
  FeaturesContent,
} from "./FleetCard.styles";
import Title from "@/components/text/Title";
import { Text } from "@/components/text/Text";
import Image from "@/components/image/Image";
import { Theme } from "../../../../styles/theme.styles";
import { Paragraph } from "@/components/text/Paragraph";
import PassengersIcon from "../../../../assets/images/PassengersIcon.png";
import LuggageIcon from "../../../../assets/images/LuggageIcon.png";
interface FleetCardProps {
  title: string;
  text: string;
  passengers: string;
  luggage: string;
  url: string;
}

const FleetCard = ({
  title,
  text,
  passengers,
  luggage,
  url,
}: FleetCardProps) => {
  return (
    <FleetCardWrapper backGroundColor={Theme.colors.lightGrey}>
      <FleetCardContainer>
        <TextWrapper>
          <Title
            level={3}
            fontSize="20px"
            fontColor={Theme.colors.baseBlack}
            fontWeight="500"
          >
            {title}
          </Title>
          <Paragraph
            fontSize="14px"
            fontColor={Theme.colors.baseBlack}
            fontWeight="400"
          >
            {text}
          </Paragraph>
        </TextWrapper>
        <ImageWrapper>
          <Image src={url} alt="mercedes" width="auto" height="100%" />
        </ImageWrapper>
        <FeaturesWrapper>
          <FeaturesContent>
            <Image
              src={PassengersIcon}
              width="14px"
              alt="passenger-icon"
              padding="18px"
              borderRadius="40%"
              backGroundColor={Theme.colors.whiteGrey}
            />
            <Text
              fontWeight="400"
              fontSize="14px"
              fontColor={Theme.colors.baseBlack}
            >
              Passagers {passengers}
            </Text>
          </FeaturesContent>
          <FeaturesContent>
            <Image
              src={LuggageIcon}
              width="14px"
              alt="luggage-icon"
              padding="18px"
              borderRadius="40%"
              backGroundColor={Theme.colors.whiteGrey}
            />
            <Text
              fontWeight="400"
              fontSize="14px"
              fontColor={Theme.colors.baseBlack}
            >
              Bagages {luggage}
            </Text>
          </FeaturesContent>
        </FeaturesWrapper>
      </FleetCardContainer>
    </FleetCardWrapper>
  );
};
//background-color: #f6f6f6;
//border-radius: 50%;
//padding: 16px;
export default FleetCard;
