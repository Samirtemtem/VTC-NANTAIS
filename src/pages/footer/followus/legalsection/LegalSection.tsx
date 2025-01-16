import React from "react";
import { Text } from "@/components/text/Text";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../../../../styles/theme.styles";
const Wrapper = styled.div`
  padding-right: 16px;
  display: flex;
  gap: 48px;
  @media only screen and (max-width: 920px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 16px;
`;
const LegalSection = () => {
  return (
    <Wrapper>
      <Container>
        <Text>© 2025 Travioo</Text>
      </Container>
      <Container>
        <Link to="/">
          <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="400">
            Terms
          </Text>
        </Link>
        <Link to="/">
          <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="400">
            Privacy policy
          </Text>
        </Link>
        <Link to="/">
          <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="400">
            Legal notice
          </Text>
        </Link>
        <Link to="/">
          <Text fontColor={Theme.colors.white} fontSize="14px" fontWeight="400">
            Accesabilty
          </Text>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default LegalSection;
