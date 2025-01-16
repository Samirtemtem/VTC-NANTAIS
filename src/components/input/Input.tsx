import React from "react";
import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";

interface Props {
  type?: string;
  placeHolder?: string;
  height?: string;
}

const StyledInput = styled.input<Props>`
  background-color: ${Theme.colors.whiteGrey};
  padding: 14px;
  border-radius: 6px;
  width: 100%;
  border: 2px solid transparent;
  box-sizing: border-box;
  height: ${({ height }) => height};

  :focus {
    border: 2px solid ${Theme.colors.baseBlack};
  }
  ::placeholder {
    color: ${Theme.colors.baseBlack};
  }
`;

const Input = ({ type, placeHolder, height }: Props) => {
  return <StyledInput type={type} placeholder={placeHolder} height={height} />;
};

export default Input;
