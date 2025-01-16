import styled from "styled-components";
interface Props {
  url: string;
}

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 58px;
  @media only screen and (max-width: 560px) {
    gap: 24px;
  }
`;
export const CustomerWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
export const QuoteWrapper = styled.div`
  position: relative;
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
`;
export const ImageWrapper = styled.div<Props>`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 6px;
  width: 340px;
  height: 340px;
  @media only screen and (max-width: 990px) {
    width: 220px;
    height: 220px;
  }
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

export const NameWrapper = styled.div``;

export const ReviewWrapper = styled.div``;

export const CustomerReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
