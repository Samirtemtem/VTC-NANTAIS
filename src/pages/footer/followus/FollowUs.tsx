import React, { useEffect, useState } from "react";
import { Text } from "@/components/text/Text";
import FacebookLogo from "@/assets/images/FacebookLogo.png";
import TwitterLogo from "@/assets/images/TwitterLogo.png";
import InLogo from "@/assets/images/InLogo.png";
import InstagramLogoIcon from "@/assets/images/InstagramLogoIcon.png";
import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";
import ActionImage from "@/components/image/ActionImage";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media only screen and (max-width: 560px) {
    align-items: flex-end;
  }
`;
const ImageWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 900px) {
    img {
      padding: 0;
    }
  }
`;
const ImageBox = styled.div`
  box-sizing: content-box;
  width: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${Theme.colors.grey};
  }
  border-radius: 50%;
`;
const FollowUs = () => {
  const [isScreenWidth, setIsScreenWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsScreenWidth(false);
      } else {
        setIsScreenWidth(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Wrapper>
      {/* {!isScreenWidth ? (
        <Text fontWeight="500" fontColor={Theme.colors.white} fontSize="18px">
          Follow Us
        </Text>
      ) : (
        <></>
      )} */}

      <ImageWrapper>
        <ImageBox>
          <ActionImage
            to="/"
            src={FacebookLogo}
            alt="facebooklogo"
            width="auto"
            padding="14px"
            height="16px"
          />
        </ImageBox>
        <ImageBox>
          <ActionImage
            to="/"
            src={TwitterLogo}
            alt="twitterlogo"
            width="auto"
            padding="14px"
            height="16px"
          />
        </ImageBox>
        <ImageBox>
          <ActionImage
            to="/"
            src={InLogo}
            alt="Inlogo"
            width="auto"
            padding="14px"
            height="16px"
          />
        </ImageBox>
        <ImageBox>
          <ActionImage
            to="/"
            src={InstagramLogoIcon}
            alt="instagramlogo"
            width="auto"
            padding="14px"
            height="16px"
          />
        </ImageBox>
      </ImageWrapper>
    </Wrapper>
  );
};

export default FollowUs;
