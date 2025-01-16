import styled from "styled-components";

interface Props {
  backGroundColor: string;
}

export const HowItWorksWrapper = styled.section<Props>`
  background-color: ${({ backGroundColor }) => backGroundColor};
  padding: 24px;
  position: relative;
`;
export const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 72px auto;
  max-width: 1170px;

  @media only screen and (max-width: 990px) {
    margin: 0 auto;
    align-items: flex-start;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media only screen and (max-width: 990px) {
    max-width: 400px;
  }
`;

export const ImageWrapper = styled.div``;

export const TextInstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TextImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 48px;

  @media only screen and (max-width: 990px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    flex-direction: column-reverse;
  }
`;
