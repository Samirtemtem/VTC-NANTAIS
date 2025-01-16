import React from "react";
import * as Styled from "./NotFound.styles";
import Image from "@/components/image/Image";
import Title from "@/components/text/Title";
import { Theme } from "@/styles/theme.styles";
import { Text } from "@/components/text/Text";
import { Paragraph } from "@/components/text/Paragraph";
import ActionButton from "@/components/button/ActionButton";
import { Link } from "react-router-dom";
import TopRIghtArrowWhite from "@/assets/images/TopRightArrowWhite.png";

const NotFound = () => {
  return (
    <Styled.NotFoundWrapper>
      <Styled.NotFoundContainer>
        <Image src="./images/404-image.png" width="100%" alt="404" />
        <Title
          level={2}
          fontSize="44px"
          fontColor={Theme.colors.baseBlack}
          fontWeight="500"
        >
          Oops! It looks like you're lost.
        </Title>
        <Paragraph
          fontSize="16px"
          fontColor={Theme.colors.baseBlack}
          fontWeight="500"
        >
          The page you're looking for isn't available. Try to search again or
          use the go to.
        </Paragraph>
        <Link to="/">
          <ActionButton borderRadius="6px">
            <Text fontColor={Theme.colors.white} fontSize="16px">
              Go Back To Homepage
            </Text>
            <Image
              src={TopRIghtArrowWhite}
              width="12px"
              alt="top-right-arrow"
            />
          </ActionButton>
        </Link>
      </Styled.NotFoundContainer>
    </Styled.NotFoundWrapper>
  );
};

export default NotFound;
