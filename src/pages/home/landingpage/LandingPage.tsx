import React, { useEffect, useState } from "react";

import { Theme } from "../../../styles/theme.styles";
import { Text } from "@/components/text/Text";

import Title from "@/components/text/Title";
import {
  LandingPageWrapper,
  HeadingWrapper,
  LandingPageContainer,
  LandingPageContent,
  LandingPageTitle,
  LandingPageSubtitle,
  ButtonContainer,
} from "../landingpage/LandingPage.styles";

import CarRentalSearch from "./carrentalsearch/CarRentalSearch";
import ActionButton from "@/components/button/ActionButton";

const LandingPage = () => {
  const [topPosition, setTopPosition] = useState('8%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTopPosition('25%');
      } else {
        setTopPosition('8%');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LandingPageWrapper backGroundImage="/images/aboutus/about-us-background-image.png">
      <LandingPageContainer>
        <div>
          <HeadingWrapper 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              position: 'absolute',
              top: topPosition,
              zIndex: 2,
              alignItems: 'center',
              width: '80%',
              margin: '0 auto',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              justifyContent: 'center',
              width: '100%',
              marginBottom: '1rem'
            }}>
              <ActionButton 
                borderRadius="6px"
                onClick={() => {
                  const reservationSection = document.getElementById('reservation');
                  if (reservationSection) {
                    reservationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Text fontSize="16px" fontColor={Theme.colors.white} fontWeight="500">
                  RESERVER
                </Text>
              </ActionButton>
              <ActionButton 
                borderRadius="6px"
                as="a"
                //href="https://wa.me/33605649190"
                href="tel:+33605649190"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text fontSize="16px" fontColor={Theme.colors.white} fontWeight="500" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
                  +33 6 05 64 91 90
                </Text>
              </ActionButton>
            </div>

            <LandingPageContent>
              <LandingPageTitle>
                <Title
                  level={1}
                  fontColor={Theme.colors.white}
                  fontSize="45px"
                  fontWeight="500"
                >
                  Réservez votre chauffeur privé VTC 24/7 en un clic
                </Title>
              </LandingPageTitle>
              {/* <LandingPageSubtitle>
                <Text fontColor={Theme.colors.white} fontSize="25px">
                  RESERVER CHAUFFEUR VTC A NANTAIS DISPONIBLE IMMEDIATEMENT 24H /7J
                </Text>
              </LandingPageSubtitle> */}
            </LandingPageContent>
          </HeadingWrapper>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%',
            gap: '2rem'
          }}>
            <div style={{ flex: 1 }}>
            </div>
          
          </div>
        </div>
      </LandingPageContainer>
    </LandingPageWrapper>
  );
};

export default LandingPage;
