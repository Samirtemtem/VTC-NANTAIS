import React from "react";
import img from "@/assets/images/MacBookMockUp.png";
import Image from "@/components/image/Image";
import {
  HowItWorksWrapper,
  HowItWorksContainer,
  TextWrapper,
  ImageWrapper,
  TextInstructionsWrapper,
  TextImageWrapper,
} from "./HowItWorksPage.styles";
import { Theme } from "../../../styles/theme.styles";
import { Text } from "@/components/text/Text";
import { Paragraph } from "@/components/text/Paragraph";
import Title from "@/components/text/Title";
const HowItWorksPage = () => {
  return (
    <HowItWorksWrapper backGroundColor={Theme.colors.black}>
      <HowItWorksContainer>
        <Title
          level={2}
          fontColor={Theme.colors.white}
          fontWeight="500"
          fontSize="44px"
        >
          Comment ça marche
        </Title>
        <TextImageWrapper>
          <TextWrapper>
            <TextInstructionsWrapper>
              <Text
                fontSize="18px"
                fontWeight="600"
                fontColor={Theme.colors.white}
              >
                Créez votre itinéraire
              </Text>
              <Paragraph
                fontColor={Theme.colors.whiteGrey}
                fontSize="14px"
                fontWeight="500"
              >
                Entrez vos lieux de prise en charge et de dépose ou le nombre d'heures que vous souhaitez réserver un véhicule et un chauffeur
              </Paragraph>
            </TextInstructionsWrapper>
            <TextInstructionsWrapper>
              <Text
                fontSize="18px"
                fontWeight="600"
                fontColor={Theme.colors.white}
              >
                Choisissez un véhicule pour vous
              </Text>
              <Paragraph
                fontColor={Theme.colors.whiteGrey}
                fontSize="14px"
                fontWeight="500"
              >
                Le jour de votre trajet, vous recevrez deux mises à jour par e-mail et SMS - une vous informant que.
              </Paragraph>
            </TextInstructionsWrapper>
            <TextInstructionsWrapper>
              <Text
                fontSize="18px"
                fontWeight="600"
                fontColor={Theme.colors.white}
              >
                Profitez du trajet
              </Text>
              <Paragraph
                fontColor={Theme.colors.whiteGrey}
                fontSize="14px"
                fontWeight="500"
              >
                Après votre trajet, nous apprécierions que vous puissiez noter votre véhicule et votre chauffeur.
              </Paragraph>
            </TextInstructionsWrapper>
          </TextWrapper>
          <ImageWrapper style={{ 
            width: '100%', 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}>
            <section id="reservation" style={{ 
              width: '100%',
              height: window.innerWidth <= 768 ? '100%' : '100vh',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              padding: 0,
              margin: 0,
              boxSizing: 'border-box'
            }}>
              <iframe 
                src='https://app.clickchauffeur.com:8443/module/TejMxkFOd9j0kLjN' 
                style={{ 
                  border: 'none',
                  borderRadius: window.innerWidth <= 768 ? '0' : '12px',
                  boxShadow: window.innerWidth <= 768 ? 'none' : '0 6px 10px rgba(0, 0, 0, 0.15)',
                  width: '100%',
                  height: window.innerWidth <= 768 ? '100vh' : 'calc(100vh - 4rem)',
                  margin: 0,
                  padding: 0
                }}
              />
            </section>
          </ImageWrapper>
        </TextImageWrapper>
      </HowItWorksContainer>
    </HowItWorksWrapper>
  );
};

export default HowItWorksPage;
