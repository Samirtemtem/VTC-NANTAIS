import React from "react";
import styled, { css } from "styled-components";

import { menuItems } from "./navmenudata/navMenuItemsData";

import { Theme } from "@/styles/theme.styles";
import NavMenuItems from "./NavMenuItems";
interface Props {
  isOpened: boolean;
  screenWidth: boolean;
  onClick: () => void;
}
const UnorderedList = styled.ul`
  display: flex;
  padding-left: 32px;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    padding: 24px;
    a {
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const NavMenuWrapper = styled.div<Props>`
  @media only screen and (max-width: 920px) {
    position: fixed;
    transition: transform 0.5s ease-in-out;
    top: 80px;
    z-index: 99;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${Theme.colors.white};
    transform: ${({ isOpened }) => isOpened ? 'translateX(0)' : 'translateX(100%)'};
    overflow-y: auto;
  }
`;

const NavList = ({ isOpened, screenWidth, onClick }: Props) => {
  return (
    <NavMenuWrapper screenWidth={screenWidth} isOpened={isOpened} onClick={onClick}>
      <UnorderedList>
        {menuItems.map(({ title, url, isAnchor }, index) => (
          <NavMenuItems
            key={index}
            url={url}
            title={title}
            screenWidth={screenWidth}
            onClick={onClick}
            isAnchor={isAnchor}
          />
        ))}
      </UnorderedList>
    </NavMenuWrapper>
  );
};

export default NavList;
