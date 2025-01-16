import React from 'react';
import styled from "styled-components";

const GmailContainer = styled.a`
  position: fixed;
  bottom: 120px; // Position above WhatsApp button
  right: 40px;
  z-index: 999; // Slightly lower than WhatsApp button to maintain proper stacking
  cursor: pointer;
  transition: transform 0.3s ease;
  display: block;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
`;

const GmailButton = () => {
  const email = "contact@travioo.fr";
  const mailtoUrl = `mailto:${email}`;

  return (
    <GmailContainer href={mailtoUrl} aria-label="Contact par Email">
      <img 
        src="/images/gmail-icon.svg" 
        alt="Gmail"
      />
    </GmailContainer>
  );
};

export default GmailButton;
