import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "@/styles/theme.styles";
import { Text } from "@/components/text/Text";

interface MenuItem {
  title: string;
  url: string;
  index: number;
}

interface Props {
  submenu?: MenuItem[];
  onClick: () => void;
}

const StyledUnorderedList = styled.ul`
  position: absolute;

  width: 270px;
  padding: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 6px 6px;
  background-color: ${Theme.colors.white};
`;

const StyledLink = styled(Link)``;

const StyledList = styled.li``;

const NavMenuDropDown = ({ submenu, onClick }: Props) => {
  return (
    <StyledUnorderedList>
      {submenu &&
        submenu.map((menu) => (
          <StyledList key={menu.index}>
            <StyledLink to={menu.url}>
              <Text fontColor="black" onClick={onClick}>
                {menu.title}
              </Text>
            </StyledLink>
          </StyledList>
        ))}
    </StyledUnorderedList>
  );
};

export default NavMenuDropDown;
