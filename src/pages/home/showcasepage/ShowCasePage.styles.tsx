import styled from "styled-components";

interface Props {
  backGroundColor: string;
}

export const ShowCaseWrapper = styled.section<Props>`
  padding: 24px;
  margin: 0 24px;
  border-radius: 6px;
  background-color: ${({ backGroundColor }) => backGroundColor};
  @media only screen and (max-width: 990px) {
    margin: 0 12px;
  }
`;

export const ShowCaseContainer = styled.div`
  max-width: 1170px;
  margin: 76px auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 990px) {
    margin: 0 auto;
    gap: 12px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const TitleWrapper = styled.div`
  @media only screen and (max-width: 990px) {
    h2 {
      font-size: 34px;
    }
  }
`;

export const CountUpWrapper = styled.div`
  display: flex;
  gap: 46px;
  @media only screen and (max-width: 560px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
