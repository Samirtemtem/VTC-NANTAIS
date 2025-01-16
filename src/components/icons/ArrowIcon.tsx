import React from 'react';
import styled from 'styled-components';

interface ArrowIconProps {
  direction: 'up' | 'down';
}

const IconWrapper = styled.div<ArrowIconProps>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${({ direction }) => (direction === 'up' ? '180deg' : '0deg')});
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.colors?.baseBlack || '#000'};
`;

const SVGIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction }) => {
  return (
    <IconWrapper direction={direction}>
      <SVGIcon
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    </IconWrapper>
  );
};

export default ArrowIcon;
