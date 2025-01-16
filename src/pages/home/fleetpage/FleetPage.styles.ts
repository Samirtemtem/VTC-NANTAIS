import styled from "styled-components";

interface Props {
  marginLeft: string;
}
export const FleetPageWrapper = styled.section`
  padding: 30px;
  position: relative;
  z-index: 0;
`;

export const FleetPageContainer = styled.div`
  width: 100%;
  z-index: 998;
  max-width: 1170px;
  position: relative;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
  @media only screen and (max-width: 990px) {
    margin: 0 auto;
    gap: 24px;
  }
`;

export const FleetTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MoreFleetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const FleetCardWrapper = styled.div<Props>`
  transform: translateX(${({ marginLeft }) => marginLeft}px);

  display: flex;
  gap: 32px;
  transition: 1s;
  @media only screen and (max-width: 900px) {
    overflow-x: scroll;
    margin: 0 -30px;
    padding: 0 30px;
  }
`;
export const SliderButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const FleetBackGround = styled.div`
  border: 2px solid #e95440;
  top: 24px;

  box-sizing: border-box;
  position: absolute;
  width: 1823.67px;
  height: 1239.03px;
  left: -1284.96px;
  border-radius: 50%;
  z-index: 0;
`;
