import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand/brandLogo.png";
import styled from "styled-components";
const Image = styled.img`
  align-self: center;
  cursor: pointer;
  width: 120px;
`;
const Logo = () => {
  return (
    <Link to="/">
      <Image src="./images/logoo.jpg" alt="logo" style={{ maxWidth: '70%', height: 'auto' }} />
    </Link>
  );
};

export default Logo;
