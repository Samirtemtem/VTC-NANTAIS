import React, { useEffect } from "react";
import * as Styled from "./AboutUsPage.styles";
import { Theme } from "@/styles/theme.styles";
import Title from "@/components/text/Title";
import { Paragraph } from "@/components/text/Paragraph";
const AboutUsPage = () => {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <Styled.AboutUsPageWrapper backGroundColor={Theme.colors.white}>
      <Styled.AboutUsImage backGroundImage="./images/aboutus/about-us-background-image.png" />
      <Styled.AboutUsPageContainer>
        <Styled.TitleWrapper>
          <Styled.TextWrapper>
            <Title
              level={2}
              fontSize="44px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
TRAVIOO VTC NANTAIS : VOTRE PARTENAIRE PRIVILÉGIÉ À NANTES
            </Title>
            <Paragraph
              fontSize="16px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              
Avec une équipe de 50 chauffeurs professionnels, Travioo VTC Nantais vous propose un service de transport haut de gamme, disponible 7j/7 et 24h/24. 
Que ce soit pour vos trajets quotidiens, vos rendez-vous professionnels ou vos déplacements longues distances, nous couvrons Nantes et toute sa périphérie avec efficacité et ponctualité.

Profitez de nos véhicules spacieux et confortables, adaptés pour 1 à 8 passagers, pour voyager en toute sérénité.
            </Paragraph>
            <Paragraph
              fontSize="16px"
              fontWeight="500"
              fontColor={Theme.colors.baseBlack}
            >
              
RÉSERVEZ EN QUELQUES INSTANTS
Votre satisfaction est notre priorité. Faites confiance à Travioo VTC Nantais pour un service irréprochable, à toute heure du jour ou de la nuit.

CONTACTEZ-NOUS 24/7
            </Paragraph>
          </Styled.TextWrapper>
        </Styled.TitleWrapper>
      </Styled.AboutUsPageContainer>
    </Styled.AboutUsPageWrapper>
  );
};

export default AboutUsPage;
