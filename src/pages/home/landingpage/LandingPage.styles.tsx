import styled from "styled-components";

interface HomeProps {
  backGround?: string;
  backGroundImage?: string;
}

export const MainWrapper = styled.main``;

export const LandingPageWrapper = styled.div<HomeProps>`
  position: relative;
  height: 580px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backGroundImage }) => backGroundImage});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;
export const Overlay = styled.div<HomeProps>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backGround }) => backGround};
  opacity: 0.52;
`;

export const HeadingWrapper = styled.div`
  flex: 1;
`;
export const LandingPageContainer = styled.div`
  margin: 0 auto;
  z-index: 2;

  width: 100%;
  max-width: 1170px;
  display: flex;
  gap: 160px;
  flex-direction: column;
  @media only screen and (max-width: 990px) {
    gap: 80px;
    h1 {
      font-size: 44px;
    }
  }
`;
