import styled from "styled-components";

interface Props {
  backGroundColor?: string;
  isVisible?: boolean;
  url?: string;
}

export const ServicesCardWrapper = styled.div<Props>`
  min-width: 370px;
  max-width: 400px;
  position: relative;
  width: 370px;
  height: 400px;
  border: 1px solid ${({ backGroundColor }) => backGroundColor};
  border-radius: 6px;
  z-index: 1;
  padding: 30px;
  box-sizing: border-box;
  background-image: url(${({ url }) => url});
  background-position: center;
`;
export const ServicesCardContainer = styled.div`
  height: 100%;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 1s ease;
`;
export const ServicesBackGroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.52;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  z-index: -1;
`;
export const ParagraphWrapper = styled.div<Props>`
  transition: 1s;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
