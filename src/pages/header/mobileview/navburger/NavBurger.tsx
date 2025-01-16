import React, { MouseEventHandler, FC } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../../../styles/theme.styles";

interface NavBurgerProps {
  isOpened: boolean;
  onClick: () => void;
}

const Burger1 = styled.div`
  display: none;
  width: 20px;
  height: 2px;
  transition: all 0.5s;
  background-color: ${Theme.colors.white};
  @media only screen and (max-width: 920px) {
    display: block;
  }
`;

const Burger2 = styled.div`
  display: none;
  width: 20px;
  height: 2px;
  transition: all 0.5s;
  background-color: ${Theme.colors.white};
  @media only screen and (max-width: 920px) {
    display: block;
  }
`;

const BurgerWrapper = styled.div<NavBurgerProps>`
  display: none;
  flex-direction: column;
  gap: 8px;

  cursor: pointer;
  @media only screen and (max-width: 1100px) {
    display: flex;
  }

  ${(props) =>
    props.isOpened &&
    css`
      ${Burger1} {
        transform: rotate(45deg) translate(7px);
      }
      ${Burger2} {
        transform: rotate(-45deg) translate(7px);
      }
    `}
`;

const NavBurger: FC<NavBurgerProps> = ({ isOpened, onClick }) => {
  return (
    <BurgerWrapper isOpened={isOpened} onClick={onClick}>
      <Burger1></Burger1>
      <Burger2></Burger2>
    </BurgerWrapper>
  );
};

export default NavBurger;
