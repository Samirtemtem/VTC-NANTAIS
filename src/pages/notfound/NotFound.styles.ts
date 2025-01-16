import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  padding: 24px;
  @media only screen and (max-width: 560px) {
    margin-top: 80px;
  }
`;

export const NotFoundContainer = styled.div`
  max-width: 770px;
  margin: 76px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  @media only screen and (max-width: 560px) {
    margin: 0 auto;
  }
`;
