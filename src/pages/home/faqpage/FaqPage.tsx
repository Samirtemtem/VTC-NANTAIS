import React from "react";
import {
  FaqPageContainer,
  FaqPageWrapper,
  TitleWrapper,
  AccordionWrapper,
  FaqBackGround,
} from "./FaqPage.styles";
import Title from "@/components/text/Title";
import FaqAccordion from "./Accordion";
import { faqData, FaqItem } from "./FaqData";
import ArrowIcon from "@/components/icons/ArrowIcon";

const FaqPage = () => {
  return (
    <FaqPageWrapper>
      <FaqPageContainer>
        <TitleWrapper>
          <Title level={2} fontSize="44px" fontWeight="500">
            Foire Aux Questions
          </Title>
        </TitleWrapper>
        <AccordionWrapper>
          {faqData.map(({ title, text }: FaqItem, index: number) => (
            <FaqAccordion
              title={title}
              text={text}
              key={index}
              expandIcon={<ArrowIcon direction="down" />}
              expandedIcon={<ArrowIcon direction="up" />}
            />
          ))}
        </AccordionWrapper>
      </FaqPageContainer>

      <FaqBackGround />
    </FaqPageWrapper>
  );
};

export default FaqPage;
