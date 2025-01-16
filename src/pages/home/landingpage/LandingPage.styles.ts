import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";

export const LandingPageWrapper = styled.div<{ backGroundImage: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backGroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); // Darker overlay for better text visibility
  }
`;

export const LandingPageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 15px;
    justify-content: flex-start;
    padding-top: 100px;
  }
`;

export const LandingPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1, p {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    letter-spacing: 1px;
  }

  h1 {
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-weight: 500;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    margin: 0 auto;
  }
`;

export const LandingPageTitle = styled.div`
  width: 100%;
  
  h1 {
    font-size: 45px !important;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 32px !important;
      padding: 0 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px !important;
    }
  }
`;

export const LandingPageSubtitle = styled.div`
  width: 100%;
  
  p {
    font-size: 25px !important;
    line-height: 1.4;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 18px !important;
      padding: 0 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 16px !important;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  button, a {
    min-width: 150px;
    
    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
    }
  }
`;
