import styled from "styled-components";

interface Props {
  backGroundImage?: string;
  gridRow?: string;
}

export const RegionPageWrapper = styled.section`
  position: relative;
`;

export const RegionPageContainer = styled.div`
  margin: 76px auto;
  max-width: 1170px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  gap: 130px;

  button {
    width: 185px;
  }
  @media only screen and (max-width: 990px) {
    gap: 60px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 870px) {
    gap: 60px;
    flex-direction: column;
  }
`;

export const ImagesWrapper = styled.div`
  width: 570px;

  height: 570px;

  display: grid;

  grid-template-columns: 60% 1fr;
  grid-template-rows: 50% 50%;
  gap: 16px;
  @media only screen and (max-width: 560px) {
    width: 100%;
    height: 360px;
    grid-template-columns: 50% 1fr;
  }
`;
export const ImageWrapper = styled.div<Props>`
  background-image: url(${({ backGroundImage }) => backGroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  grid-row: ${({ gridRow }) => gridRow};
  border-radius: 6px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const MapBackGround = styled.div<Props>`
  position: absolute;
  width: 1000px;
  height: 500px;
  bottom: 0;
  right: 0;
  z-index: -2;

  background-image: url(${({ backGroundImage }) => backGroundImage});
`;

export const BackGroundBlur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  right: 0;

  width: 100%;
  background: radial-gradient(
    100% 100% at 50.04% 40%,
    #ffffff 16.05%,
    rgba(255, 255, 255, 0.5) 42.96%,
    #ffffff 74.94%
  );
  @media only screen and (max-width: 870px) {
    left: 0;
  }
  z-index: -1;
`;
