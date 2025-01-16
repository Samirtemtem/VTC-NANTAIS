import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  fontWeight?: string;
  fontSize?: string;
  fontColor?: string;
  onClick?: () => void;
  hover?: string;
  textDecoration?: string;
}

export const Text = styled.span<TextProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};

  :hover {
    ${({ hover }) => hover}
  }
`;
