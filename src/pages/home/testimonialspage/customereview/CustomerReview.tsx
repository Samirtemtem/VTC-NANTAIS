import React from "react";

import {
  TextWrapper,
  CustomerWrapper,
  QuoteWrapper,
  NameWrapper,
  ReviewWrapper,
  ImageWrapper,
  CustomerReviewWrapper,
} from "./CustomerReview.styles";
import { Text } from "@/components/text/Text";
import { Paragraph } from "@/components/text/Paragraph";
import Image from "@/components/image/Image";
import { Theme } from "@/styles/theme.styles";
import QuoteImage from "@/assets/images/QuoteImage.png";

interface Props {
  name: string;
  text: string;
  url: string;
}

const CustomerReview = ({ name, text, url }: Props) => {
  return (
    <CustomerReviewWrapper>
      <TextWrapper>
        <CustomerWrapper>
          <QuoteWrapper>
            <Image src={QuoteImage} width="26px" alt="quote" />
          </QuoteWrapper>
          <NameWrapper>
            <Text
              fontSize="18px"
              fontColor={Theme.colors.white}
              fontWeight="600"
            >
              {name}
            </Text>
          </NameWrapper>
        </CustomerWrapper>
        <ReviewWrapper>
          <Paragraph fontSize="24px" fontColor={Theme.colors.white}>
            {text}
          </Paragraph>
        </ReviewWrapper>
      </TextWrapper>
      <ImageWrapper url={url} />
    </CustomerReviewWrapper>
  );
};

export default CustomerReview;
