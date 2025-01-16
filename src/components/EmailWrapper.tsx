import React from "react";
import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";
import { Text } from "./text/Text";
import Image from "./image/Image";
import Email from "@/assets/images/email.png";

interface EmailWrapperProps {
  isFooter?: boolean;
  fontSize: string;
  children?: React.ReactNode;
}

const img = styled.img`
  align-self: center;
  cursor: pointer;
`;

const EmailContainer = styled.div<EmailWrapperProps>`
  display: flex;
  gap: 6px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ${({ isFooter }) =>
    !isFooter &&
    `@media only screen and (max-width: 1100px) {
    display: none;
  }`}
`;


const EmailWrapper = ({ isFooter, fontSize, children }: EmailWrapperProps) => {
  return (
    <EmailContainer isFooter={isFooter} fontSize={fontSize}>
      <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' as 'pointer' }} >
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
          </svg>

        <Text fontColor={Theme.colors.white} fontSize={fontSize} fontWeight="500">
          contact@travioo.fr
        </Text>
      </div>
    </EmailContainer>
  );
};

export default EmailWrapper;
