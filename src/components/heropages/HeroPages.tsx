import React from "react";
import * as Styled from "./HeroPages.styles";
import { Theme } from "@/styles/theme.styles";
import Title from "../text/Title";
import { Link } from "react-router-dom";
import { Text } from "../text/Text";

interface Props {
  name: string;
}

const HeroPages = ({ name }: Props) => {
  return (
    <Styled.HeroPagesWrapper backgroundColor={Theme.colors.black}>
      <Styled.HeroPagesContainer>
        <Title
          level={3}
          fontSize="44px"
          fontColor={Theme.colors.white}
          fontWeight="500"
        >
          {name}
        </Title>
        <Styled.LinkWrapper>
          <Link to="/">
            <Text
              fontColor={Theme.colors.white}
              fontSize="14px"
              fontWeight="500"
            >
              Home
            </Text>
          </Link>
          <Text fontSize="14px" fontColor={Theme.colors.white} fontWeight="400">
            {" "}
            -{" "}
          </Text>
          <Text fontSize="14px" fontColor={Theme.colors.white} fontWeight="400">
            {name}
          </Text>
        </Styled.LinkWrapper>
      </Styled.HeroPagesContainer>
    </Styled.HeroPagesWrapper>
  );
};

export default HeroPages;
