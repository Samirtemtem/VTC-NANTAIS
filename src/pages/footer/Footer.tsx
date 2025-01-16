import React from "react";

// Styled components
import * as Styled from "./Footer.styles";

// Colors
import { Theme } from "../../styles/theme.styles";

// Components
import FollowUs from "./followus/FollowUs";
import Logo from "@/components/Logo";
import PhoneNumber from "@/components/PhoneNumber";
import MainSection from "./mainsection/MainSection";
import LegalSection from "./followus/legalsection/LegalSection";

const Footer = () => {
  return (
    // Styled Footer component with background color
    <Styled.StyledFooter BackgroundColor={Theme.colors.black}>
      <Styled.FooterWrapper>
        {/* Top section of the footer */}
        <Styled.TopWrapper BackgroundColor={Theme.colors.grey}>
          <Styled.TopContainer>
            {/* Container for Logo and PhoneNumber components */}
            <Styled.LogoContactContainer>
              <Logo />
              {/*<PhoneNumber isFooter fontSize="18px" />*/}
            </Styled.LogoContactContainer>
            {/* Container for FollowUs component */}
            <Styled.FollowUsContainer>
              <FollowUs />
            </Styled.FollowUsContainer>
          </Styled.TopContainer>
        </Styled.TopWrapper>

        {/* Middle section of the footer */}
        <Styled.MiddleWrapper BackgroundColor={Theme.colors.grey}>
          <MainSection />
        </Styled.MiddleWrapper>

        {/* Bottom section of the footer */}
        <Styled.BottomWrapper>
          <LegalSection />
        </Styled.BottomWrapper>
      </Styled.FooterWrapper>
    </Styled.StyledFooter>
  );
};

export default Footer;
