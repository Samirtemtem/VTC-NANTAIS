import React from "react";
import * as Styled from "./OfficeCard.styles";
import Image from "@/components/image/Image";
import Title from "@/components/text/Title";
import { Theme } from "@/styles/theme.styles";
import { Text } from "@/components/text/Text";
interface OfficeCardProps {
  url: string;
  city: string;
  street: string;
  number: string;
  email: string;
}

const OfficeCard = ({ url, street, city, number, email }: OfficeCardProps) => {
  return (
    <Styled.OfficeCardWrapper>
      <Image src={url} height="100%" width="auto" alt="office" />
      <Title level={3} fontSize="20px" fontColor={Theme.colors.baseBlack}>
        {city}
      </Title>
      <Text fontSize="16px" fontWeight="500" fontColor={Theme.colors.baseBlack}>
        {street}
      </Text>
      <Text fontSize="16px" fontWeight="500" fontColor={Theme.colors.baseBlack}>
        {number}
      </Text>
      <Text fontSize="16px" fontWeight="500" fontColor={Theme.colors.baseBlack}>
        {email}
      </Text>
    </Styled.OfficeCardWrapper>
  );
};

export default OfficeCard;
