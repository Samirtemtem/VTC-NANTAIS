import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "@/components/text/Text";
import { Theme } from "@/styles/theme.styles";

interface MenuItems {
  title: string;
  url: string;
  index: number;
}

interface Props {
  url: string;
  title: string;
  screenWidth: boolean;
  submenu?: MenuItems[];
  onClick: () => void;
  isAnchor?: boolean;
}

const List = styled.li``;

const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 40px;
  text-decoration: none;

  @media only screen and (max-width: 920px) {
    justify-content: space-between;
  }
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors.grey};
  }
`;

const StyledAnchor = styled.a`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 40px;
  text-decoration: none;
  color: ${Theme.colors.white};

  @media only screen and (max-width: 920px) {
    justify-content: space-between;
  }
  cursor: pointer;
  &:hover {
    background-color: ${Theme.colors.grey};
  }
`;

const NavMenuItems = ({ url, title, screenWidth, submenu, onClick, isAnchor }: Props) => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (screenWidth) {
      onClick(); // Close menu
    }
    const element = document.getElementById(url);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLinkClick = () => {
    if (screenWidth) {
      onClick(); // Close menu
    }
  };

  if (isAnchor) {
    return (
      <List>
        <StyledAnchor href={`#${url}`} onClick={handleAnchorClick}>
          <Text
            fontColor={screenWidth ? Theme.colors.black : Theme.colors.white}
            fontSize={screenWidth ? "24px" : "14px"}
            fontWeight="500"
          >
            {title}
          </Text>
        </StyledAnchor>
      </List>
    );
  }

  return (
    <List>
      <StyledLink to={url} onClick={handleLinkClick}>
        <Text
          fontColor={screenWidth ? Theme.colors.black : Theme.colors.white}
          fontSize={screenWidth ? "24px" : "14px"}
          fontWeight="500"
        >
          {title}
        </Text>
      </StyledLink>
    </List>
  );
};

export default NavMenuItems;
