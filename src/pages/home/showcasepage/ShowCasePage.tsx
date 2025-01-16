import React, { useEffect, useRef, useState } from "react";
import {
  ShowCaseWrapper,
  ShowCaseContainer,
  TitleWrapper,
  CountUpWrapper,
  CountUpContainer,
} from "./ShowCasePage.styles";
import { Theme } from "../../../styles/theme.styles";
import Title from "@/components/text/Title";
import CountUp from "react-countup";
import { Text } from "@/components/text/Text";

const ShowCasePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 0.5 means 50% visibility required
    };

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <ShowCaseWrapper backGroundColor={Theme.colors.orange}>
      <ShowCaseContainer ref={countUpRef}>
        <TitleWrapper>
          <Title
            level={2}
            fontSize="44px"
            fontColor={Theme.colors.white}
            fontWeight="500"
          >
            Des chiffres qui <br />
            parlent d'eux-mêmes.
          </Title>
        </TitleWrapper>
        {isVisible && (
          <CountUpWrapper>
            <CountUpContainer>
              <Text
                fontSize="44px"
                fontColor={Theme.colors.white}
                fontWeight="500"
              >
                <CountUp end={120} duration={3} />
              </Text>
              <Text
                fontSize="20px"
                fontWeight="500"
                fontColor={Theme.colors.white}
              >
                Véhicules
              </Text>
            </CountUpContainer>
            <CountUpContainer>
              <Text
                fontSize="44px"
                fontColor={Theme.colors.white}
                fontWeight="500"
              >
                <CountUp end={96} duration={3} />
              </Text>
              <Text
                fontSize="20px"
                fontWeight="500"
                fontColor={Theme.colors.white}
              >
                Récompenses
              </Text>
            </CountUpContainer>
            <CountUpContainer>
              <Text
                fontSize="44px"
                fontColor={Theme.colors.white}
                fontWeight="500"
              >
                <CountUp end={1350} duration={3} />
              </Text>
              <Text
                fontSize="20px"
                fontWeight="500"
                fontColor={Theme.colors.white}
              >
                Clients Satisfaits
              </Text>
            </CountUpContainer>
          </CountUpWrapper>
        )}
      </ShowCaseContainer>
    </ShowCaseWrapper>
  );
};

export default ShowCasePage;
