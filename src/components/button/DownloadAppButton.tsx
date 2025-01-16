import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../styles/theme.styles";
import Image from "../image/Image";

interface DownloadAppButtonProps {
  src: string;
  alt: string;
  width: string;
  padding?: string;
  height?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const DownloadAppButtonWrapper = styled.div`
  border: 5px;
  border: 1px solid ${Theme.colors.white};
  border-radius: 12px;
  position: relative;
  max-width: 210px;
  margin-top: 16px;
  background-color: ${Theme.colors.black};
  padding: 12px;
  display: flex;
`;
const ImageWrapper = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  ::after {
    display: block;
    height: 22px;
    width: 1px;
    background-color: ${Theme.colors.white};
    content: "";
    margin-right: 8px;
  }
`;
const DownloadAppButton = ({
  src,
  alt,
  width,
  padding,
  height,
  children,
  onClick,
}: DownloadAppButtonProps) => {
  return (
    <Link to="/" onClick={onClick}>
      <DownloadAppButtonWrapper>
        <ImageWrapper>
          <Image src={src} alt={alt} height="20px" width="auto" />
        </ImageWrapper>
        {children}
      </DownloadAppButtonWrapper>
    </Link>
  );
};

export default DownloadAppButton;
