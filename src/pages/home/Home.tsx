import React, { useEffect } from "react";

import { MainWrapper } from "./Home.styles";
import * as Styled from '../aboutus/aboutuspage/AboutUsPage.styles';
import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import GmailButton from "../../components/gmail/GmailButton";

import LandingPage from "./landingpage/LandingPage";
import PartnersPage from "./partnerspage/PartnersPage";
import FleetPage from "./fleetpage/FleetPage";
import HowItWorksPage from "./howitworkspage/HowItWorksPage";
import FaqPage from "./faqpage/FaqPage";
import ShowCasePage from "./showcasepage/ShowCasePage";
import ServicesPage from "./servicespage/ServicesPage";
import RegionPage from "./regionpage/RegionPage";
import DownloadAppPage from "./downloadapppage/DownloadAppPage";
import TestimonialsPage from "./testimonialspage/TestimonialsPage";
import { Theme } from "@/styles/theme.styles";
import Title from "@/components/text/Title";
import { Paragraph } from "@/components/text/Paragraph";
import { StyledButton } from "../header/Header.styles";
import { Wrapper } from "../footer/mainsection/MainSection.styles";
import ActionButton from "@/components/button/ActionButton";

const Home = () => {
  useEffect(() => {
    document.title = "Travioo VTC Nantais | Réservez votre VTC en ligne";
  });

  return (
    <MainWrapper>
      <WhatsAppButton />
      <GmailButton />
    
      <section id="home">
        <LandingPage />
      </section>
      
      <section id="about">
        <Styled.AboutUsPageWrapper backGroundColor={Theme.colors.white}>
          {/* <Styled.AboutUsImage backGroundImage="./images/aboutus/about-us-background-image.png" style={{ height: '200px', width: '120%' }} /> */}
          <Styled.AboutUsPageContainer>
            <Styled.TitleWrapper>
              <Styled.TextWrapper>
              <Title
              level={2}
              fontSize="44px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
TRAVIOO VTC : VOTRE PARTENAIRE PRIVILÉGIÉ
            </Title>
            <Paragraph
              fontSize="16px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              
              UN RÉSEAU DE PLUS DE 1000 CHAUFFEURS DISPONIBLES PARTOUT EN FRANCE, EN IMMÉDIAT OU SUR RÉSERVATION

Travioo VTC, votre entreprise de chauffeurs privés professionnels, est à votre service 24h/24 et 7j/7.
Nous couvrons l'ensemble des régions françaises, des grandes métropoles aux zones rurales, grâce à notre réseau étendu et à notre service de VTC longue distance.

Découvrez dès maintenant nos prestations et profitez de notre flotte de véhicules haut de gamme, parfaitement adaptés pour accueillir de 1 à 8 passagers.

            </Paragraph>
            <Paragraph
              fontSize="16px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              
{/* <Title
  level={3}
  fontSize="24px"
  fontWeight="500"
  fontColor={Theme.colors.baseBlack}
>
   RÉSERVEZ EN QUELQUES INSTANTS
  
<br />
<br />
</Title> */}
<br />
Votre satisfaction est notre priorité. Faites confiance à Travioo VTC pour un service irréprochable, à toute heure du jour ou de la nuit.
<br />

<br />
<br />
<Title
  level={3}
  fontSize="24px"
  fontWeight="500"
  fontColor={Theme.colors.baseBlack}
>
  CONTACTEZ-NOUS 24/7
</Title>
            </Paragraph>
               </Styled.TextWrapper>
            </Styled.TitleWrapper>
          </Styled.AboutUsPageContainer>
        </Styled.AboutUsPageWrapper>
        <HowItWorksPage />
      </section>

      <section id="fleet">
        <FleetPage />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <section className="mobile-stack">
        {/* <TestimonialsPage /> */}
        {/* <FaqPage /> */}
        <DownloadAppPage />
      </section>
    </MainWrapper>
  );
};

export default Home;
