import React from 'react';
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;

  backGroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const StyledSliderButton = styled.button<ButtonProps>`
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 72px;
  gap: 8px;
  padding: 24px 24px;
  border-radius: 50%;
  background-color: ${({ backGroundColor }) => backGroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
`;

const SliderButton = ({
  children,
  backGroundColor,

  borderColor,
  onClick,
}: ButtonProps) => {
  return (
    <StyledSliderButton
      backGroundColor={backGroundColor}
      onClick={onClick}
      borderColor={borderColor}
    >
      {children}
    </StyledSliderButton>
  );
};

export default SliderButton;
