import React from "react";
import styled from "styled-components";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: string;
  fontColor?: string;
}

const Title = ({
  level,
  children,
  fontColor,
  fontSize,
  fontWeight,
}: HeadingProps) => {
  const StyledHeading = styled(`h${level}`)<HeadingProps>`
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ fontColor }) => fontColor};
  `;

  return (
    <StyledHeading
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      level={level}
    >
      {children}
    </StyledHeading>
  );
};

export default Title;
