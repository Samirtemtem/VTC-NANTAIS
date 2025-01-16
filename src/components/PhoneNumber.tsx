import React from "react";
import styled from "styled-components";
import { Theme } from "../styles/theme.styles";
import { Text } from "./text/Text";
import Call from "../assets/images/Call.png";
import Email from "../assets/images/Email.png"; // Add Email import
import EmailWrapper from "./EmailWrapper";
interface PhoneNumberProps {
  isFooter?: boolean;
  fontSize: string;
}

const Image = styled.img`
  align-self: center;
  cursor: pointer;
`;

const PhoneWrapper = styled.div<PhoneNumberProps>`
  display: flex;
  gap: 6px;

  ${({ isFooter }) =>
    !isFooter &&
    `@media only screen and (max-width: 1100px) {
    display: none;
  }`}
`;

const StyledEmailWrapper = styled.div<PhoneNumberProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  ${({ isFooter }) =>
    isFooter &&
    `
    margin-top: 20px;
  `}
`;

const PhoneNumber = ({ isFooter, fontSize }: PhoneNumberProps) => {
  return (
    <>
      <PhoneWrapper isFooter={isFooter} fontSize="">
        <Image src={Call} alt="phone" />
        <Text fontColor={Theme.colors.white} fontSize={fontSize} fontWeight="500">
          +33 6 05 64 91 90
        </Text>
      </PhoneWrapper>
      <EmailWrapper isFooter={isFooter} fontSize={""}>
      </EmailWrapper>
    </>
  );
};

export default PhoneNumber;
