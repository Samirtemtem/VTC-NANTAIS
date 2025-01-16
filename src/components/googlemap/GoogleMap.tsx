import React from "react";
import styled from "styled-components";

interface Props {
  location: string;
}

const StyledIframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 600px;

  @media only screen and (max-width: 560px) {
    height: 300px;
  }
`;
const GoogleMapWrapper = styled.div`
  width: 100%;
`;

const GoogleMap = () => {
  return (
    <GoogleMapWrapper>
      <StyledIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86684.63425085055!2d-1.6427351199148807!3d47.238203214001906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eff448ffdbca647%3A0x5966f86c7ecb808e!2sTravioo%20VTC%20Nantais!5e0!3m2!1sen!2stn!4v1736286286862!5m2!1sen!2stn"
        loading="lazy"
      />
    </GoogleMapWrapper>
  );
};

export default GoogleMap;
