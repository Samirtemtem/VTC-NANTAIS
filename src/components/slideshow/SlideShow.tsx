import React, { useState } from "react";
import { SliderButtonWrapper, FleetCardWrapper } from "./SlideShow.styles";
import { Theme } from "../../styles/theme.styles";
import SliderButton from "../button/SliderButton";
import Image from "../image/Image";
import RightSliderArrow from "../../assets/images/RightSliderArrow.png";
import LeftSliderArrow from "../../assets/images/LeftSliderArrow.png";
interface SlideShowProps {
  children: React.ReactNode;
  data: number;
}

const SlideShow = ({ children, data }: SlideShowProps) => {
  const [fleetCardIndex, setFleetCardIndex] = useState(data - 2);
  const [translateX, setTranslateX] = useState(0);

  const handleFleetCardMarginLeft = () => {
    if (fleetCardIndex >= 0 && fleetCardIndex < data - 2) {
      setTranslateX((prevState) => prevState + 400);
      setFleetCardIndex((prevState) => prevState + 1);
    }
  };
  const handleFleetCardMarginRight = () => {
    if (fleetCardIndex <= data - 2 && fleetCardIndex > 0) {
      setTranslateX((prevState) => prevState - 400);
      setFleetCardIndex((prevState) => prevState - 1);
    }
  };
  return (
    <>
      <FleetCardWrapper translateX={translateX.toString()}>
        {children}
      </FleetCardWrapper>
      <SliderButtonWrapper>
        <SliderButton
          onClick={handleFleetCardMarginLeft}
          backGroundColor={
            fleetCardIndex >= 0 && fleetCardIndex < data - 2
              ? Theme.colors.whiteGrey
              : Theme.colors.white
          }
          borderColor={
            fleetCardIndex >= 0 && fleetCardIndex < data - 2
              ? Theme.colors.baseBlack
              : Theme.colors.lightGrey
          }
        >
          <Image src={LeftSliderArrow} alt="left-arrow" width="20px" />
        </SliderButton>

        <SliderButton
          onClick={handleFleetCardMarginRight}
          backGroundColor={
            fleetCardIndex <= 6 && fleetCardIndex > 0
              ? Theme.colors.whiteGrey
              : Theme.colors.white
          }
          borderColor={
            fleetCardIndex <= 6 && fleetCardIndex > 0
              ? Theme.colors.baseBlack
              : Theme.colors.lightGrey
          }
        >
          <Image src={RightSliderArrow} alt="right-arrow" width="20px" />
        </SliderButton>
      </SliderButtonWrapper>
    </>
  );
};

export default SlideShow;
