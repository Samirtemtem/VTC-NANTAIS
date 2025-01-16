import styled from "styled-components";

interface Props {
  backGroundColor?: string;
  backGroundImage?: string;
}

export const AboutUsPageWrapper = styled.div<Props>`
  position: relative;
  padding: 24px;
  background-color: ${({ backGroundColor }) => backGroundColor};
`;

export const AboutUsPageContainer = styled.div`
  max-width: 1170px;
  margin: 56px auto;
  position: relative;
`;

export const TitleWrapper = styled.div``;

export const TextWrapper = styled.div`
  width: 100%;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  p {
    padding: 8px;
  }
`;

export const AboutUsImage = styled.div<Props>`
  width: calc(100% + 48px);
  margin: -24px;
  height: 600px;

  background-image: url(${({ backGroundImage }) => backGroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 560px) {
    height: 300px;
  }
`;
