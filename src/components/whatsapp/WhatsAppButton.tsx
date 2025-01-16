import React from 'react';
import styled from "styled-components";

const WhatsAppContainer = styled.a`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const WhatsAppButton = () => {
  const phoneNumber = "+33605649190"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <WhatsAppContainer href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact sur WhatsApp">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
      />
    </WhatsAppContainer>
  );
};

export default WhatsAppButton;
