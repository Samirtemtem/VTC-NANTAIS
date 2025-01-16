import styled from "styled-components";

export const FaqPageWrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

export const FaqPageContainer = styled.div`
  max-width: 1170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  gap: 46px;
  margin: 76px auto;
  @media only screen and (max-width: 990px) {
    margin: 0 auto;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const AccordionWrapper = styled.div`
  max-width: 770px;
  z-index: 1;
`;

export const FaqBackGround = styled.div`
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
