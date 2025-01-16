import styled from "styled-components";

interface Props {
  BackgroundColor: string;
}

export const StyledFooter = styled.footer<Props>`
  height: auto;
  position: relative;

  width: 100%;
  background-color: ${({ BackgroundColor }) => BackgroundColor};
  color: white;
`;

export const FooterWrapper = styled.div`
  max-width: 1170px;
  padding: 24px 12px;
  margin: auto;
  @media only screen and (max-width: 920px) {
    padding: 24px 12px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TopWrapper = styled.div<Props>`
  ::after {
    display: block;
    margin: 16px 0 32px 0;
    width: 100%;
    border-radius: 16px;
    height: 2px;
    background-color: ${({ BackgroundColor }) => BackgroundColor};
    content: "";
  }
`;
export const LogoContactContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const FollowUsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const MiddleWrapper = styled.div<Props>`
  ::after {
    display: block;
    margin: 16px 0 32px 0;
    width: 100%;
    border-radius: 16px;
    height: 2px;
    background-color: ${({ BackgroundColor }) => BackgroundColor};
    content: "";
  }
`;
export const MiddleContainer = styled.div``;
export const BottomContainer = styled.div``;
export const BottomWrapper = styled.div``;
