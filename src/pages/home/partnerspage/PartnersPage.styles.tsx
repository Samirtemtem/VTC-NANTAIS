import styled from "styled-components";
interface Props {
  backGroundColor: string;
}
export const PartnersPageWrapper = styled.section<Props>`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    height: 1px;
    width: calc(100% + 60px);

    opacity: 0.5;
    background-color: ${({ backGroundColor }) => backGroundColor};
  }
`;
export const PartnersPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  margin: 74px auto;
  @media only screen and (max-width: 990px) {
    margin: 0 auto;
    padding-bottom: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;
export const TitleWrapper = styled.div``;

export const IconsWrapper = styled.div`
  display: inline-block;

  img {
    padding: 24px;
  }
`;
