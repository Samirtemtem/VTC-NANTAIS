import React from "react";

import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  padding?: string;
  height?: string;
  objectFit?: string;
  backGroundColor?: string;
  borderRadius?: string;
  onClick?: () => void;
}

const StyledImage = styled.img<ImageProps>`
  align-self: center;

  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  object-fit: ${({ objectFit }) => objectFit};
  background-color: ${({ backGroundColor }) => backGroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
const Image = ({
  src,
  alt,
  width,
  padding,
  height,
  backGroundColor,
  objectFit,
  onClick,
  borderRadius,
}: ImageProps) => {
  return (
    <StyledImage
      backGroundColor={backGroundColor}
      src={src}
      borderRadius={borderRadius}
      alt={alt}
      width={width}
      padding={padding}
      height={height}
      objectFit={objectFit}
      onClick={onClick}
    />
  );
};

export default Image;
