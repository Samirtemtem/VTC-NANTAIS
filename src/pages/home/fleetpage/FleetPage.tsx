// React import
import React from "react";
import styled from 'styled-components';

// Styled components imports
import {
  FleetPageWrapper,
  FleetPageContainer,
  FleetTitleContainer,
  MoreFleetContainer,
  FleetBackGround,
} from "./FleetPage.styles";

// Component imports
import { Text } from "@/components/text/Text";
import { Theme } from "../../../styles/theme.styles";
import Image from "@/components/image/Image";
import Title from "@/components/text/Title";
import TopRightArrow from "@/assets/images/TopRightArrow.png";
import { Link } from "react-router-dom";
import FleetCard from "./fleetcard/FleetCard";

// Data import
import { FleetData } from "./fleetcard/FleetData";

const StyledFleetPageContainer = styled(FleetPageContainer)`
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FleetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 2rem 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileFleetGrid = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const MobileCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CarImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  object-fit: cover;
`;

const PassengerInfo = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0.5rem 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 0.25rem 0;
  }
`;

const CarTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0.5rem 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 0.25rem 0;
  }
`;

const ReserveButton = styled.button`
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  margin-top: auto;

  &:hover {
    background-color: #002244;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 12px;
  }
`;

// FleetPage component
const FleetPage = () => {
  return (
    <FleetPageWrapper>
      <StyledFleetPageContainer>
        <FleetTitleContainer>
          <Title
            level={2}
            fontColor={Theme.colors.baseBlack}
            fontSize="44px"
            fontWeight="500"
          >
            Notre Flotte de Véhicules
          </Title>
        
        </FleetTitleContainer>

        {/* Desktop View */}
        <FleetGrid>
          {FleetData.map(({ title, text, url, passengers, luggage }, index) => (
            <FleetCard
              key={index}
              title={title}
              text={text}
              url={url}
              passengers={passengers}
              luggage={luggage}
            />
          ))}
        </FleetGrid>

        {/* Mobile View */}
        <MobileFleetGrid>
          {FleetData.map(({ title, text, url }, index) => (
            <MobileCard key={index}>
              <CarImage src={url} alt={title} />
              <PassengerInfo>{text}</PassengerInfo>
              <CarTitle>{title}</CarTitle>
              <ReserveButton onClick={() => {
                const reservationSection = document.getElementById('reservation');
                if (reservationSection) {
                  reservationSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                RÉSERVER
              </ReserveButton>
            </MobileCard>
          ))}
        </MobileFleetGrid>
      </StyledFleetPageContainer>
      <FleetBackGround />
    </FleetPageWrapper>
  );
};

export default FleetPage;
