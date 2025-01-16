import React, { useState, useEffect } from "react";

// styled components
import {
  Wrapper,
  NavbarContainer,
  FormWrapper,
  LogoNavMenuWrapper,
  NavMenuWrapper,
  LogoWrapper,
  UlWrapper,
  BurgerWrapper,
  StyledHeader,
  StyledButton,
} from "./Header.styles";

//colors
import { Theme } from "../../styles/theme.styles";

//components
import NavList from "./navmenu/NavList";
import Logo from "@/components/Logo";
import NavForm from "./navform/NavForm";
import PhoneNumber from "@/components/PhoneNumber";
import NavBurger from "./mobileview/navburger/NavBurger";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isScreenWidth, setIsScreenWidth] = useState(window.innerWidth <= 920);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsScreenWidth(false);
        setIsOpened(false);
      } else {
        setIsScreenWidth(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array since we only want this to run once on mount

  const toggleOpen = () => {
    setIsOpened((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <StyledHeader Backgroundcolor={Theme.colors.black}>
      <NavbarContainer>
        <LogoNavMenuWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NavMenuWrapper>
            <UlWrapper>
              <NavList
                isOpened={isOpened}
                screenWidth={isScreenWidth}
                onClick={closeMenu}
              />
            </UlWrapper>
          </NavMenuWrapper>
        </LogoNavMenuWrapper>
        <Wrapper>
          <Wrapper>
            <PhoneNumber fontSize="14px" />
          </Wrapper>
          <FormWrapper>
            <NavForm />
          </FormWrapper>
          <BurgerWrapper>
            <NavBurger isOpened={isOpened} onClick={toggleOpen} />
          </BurgerWrapper>
        </Wrapper>
        <br /><br />
      </NavbarContainer>

    </StyledHeader>
  );
};

export default Navbar;
