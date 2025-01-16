import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const HeroPagesWrapper = styled.div<Props>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px;
  @media only screen and (max-width: 560px) {
    padding-top: 80px;
  }
`;

export const HeroPagesContainer = styled.div`
  margin: 56px auto;

  max-width: 1170px;
  @media only screen and (max-width: 560px) {
    margin: 0 auto;
  }
`;

export const LinkWrapper = styled.div`
  display: inline-block;
`;
