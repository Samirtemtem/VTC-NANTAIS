import styled from "styled-components";

export const MainWrapper = styled.main`
  .mobile-stack {
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      
      > * {
        width: 100%;
        margin: 0;
        padding: 2rem 1rem;
      }
    }
  }
`;
