import React from 'react';
import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";

interface ButtonProps {
  children: React.ReactNode;
  borderRadius: string;
  backGroundColor?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  width?: string;
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
}

const StyledActionButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backGroundColor }) => backGroundColor || Theme.colors.black};
  width: ${({ width }) => width || 'auto'};
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${Theme.colors.orange};
  }
`;

const ActionButton = ({
  children,
  backGroundColor,
  borderRadius,
  onClick,
  type = "button",
  width,
  as,
  href,
  target,
  rel,
}: ButtonProps) => {
  return (
    <StyledActionButton
      borderRadius={borderRadius}
      backGroundColor={backGroundColor}
      onClick={onClick}
      type={type}
      width={width}
      as={as}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </StyledActionButton>
  );
};

export default ActionButton;
