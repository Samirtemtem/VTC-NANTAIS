import React from "react";
import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";
import { Text } from "@/components/text/Text";

interface Props {
  Backgroundcolor: string;
}
const Button = styled.a<Props>`
  border-radius: 40px;
  padding: 10px 16px;

  background: ${({ Backgroundcolor }) => Backgroundcolor};
  border: none;
  cursor: pointer;
`;

const NavForm = () => {
  return (
    <>
      
    </>
  );
};

export default NavForm;
