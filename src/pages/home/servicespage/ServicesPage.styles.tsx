import styled from "styled-components";

export const ServicesPageWrapper = styled.section`
  padding: 24px;
`;

export const ServicesPageContainer = styled.div`
  max-width: 1170px;
  margin: 76px auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
  z-index: -1;
  @media only screen and (max-width: 990px) {
    margin: 0 auto;
  }
`;

export const ServicesTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MoreServicesContainer = styled.div`
  display: flex;
  gap: 16px;
`;
