import React, { Fragment } from "react";
import {
  ContourLine,
  DownloadAppPageContainer,
  DownloadAppPageWrapper,
  BackGroundImage,
  ButtonWrapper,
} from "./DownloadAppPage.styles";
import Title from "@/components/text/Title";
import { Theme } from "@/styles/theme.styles";
import { Paragraph } from "@/components/text/Paragraph";
import DownloadAppButton from "@/components/button/DownloadAppButton";
import AppleLogo from "@/assets/images/AppleLogo.png";
import GooglePlayLogo from "@/assets/images/PlayStoreLogo.png";
import { Text } from "@/components/text/Text";
import { TextArea } from "@/pages/contact/contactform/ContactForm.styles";
import HeroPages from "@/components/heropages/HeroPages";
import ContactForm from "@/pages/contact/contactform/ContactForm";
import GoogleMap from "@/components/googlemap/GoogleMap";
const DownloadAppPage = () => {
  const ContourLines = [];
  let size: number = 108;
  let rotate: number = 15;
  for (let i: number = 0; i < 20; i++) {
    ContourLines.push(<ContourLine size={size} rotate={rotate} />);
    size += 128;
    rotate += 6;
  }

  return (
    <DownloadAppPageWrapper backGroundColor={Theme.colors.lightRed} id="contact">
      <DownloadAppPageContainer>
        <div className="contact-content">
          <div className="contact-info">
<Title level={2} fontSize="44px" fontWeight="500">     
           Contactez-nous
            </Title>
            <Paragraph fontSize="16px" fontWeight="500">
              Nous sommes à votre disposition pour répondre à toutes vos questions.
            </Paragraph>
            <div style={{ marginTop: '20px' }}>
              <Text fontSize="18px" fontWeight="600">
                <div className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                    <path d="M20.4054 3.59375C18.1607 1.34375 15.1696 0 11.9732 0C5.43214 0 0.121428 5.31071 0.121428 11.8518C0.121428 13.9286 0.671428 15.9643 1.71429 17.7589L0 24L6.38571 22.3179C8.10714 23.2714 10.0179 23.7696 11.9679 23.7696H11.9732C18.5089 23.7696 23.8571 18.4589 23.8571 11.9179C23.8571 8.72143 22.65 5.84375 20.4054 3.59375ZM11.9732 21.7607C10.2 21.7607 8.46429 21.2839 6.94286 20.3839L6.58929 20.1696L2.85 21.1607L3.85714 17.5179L3.62143 17.1482C2.63571 15.5679 2.13214 13.7357 2.13214 11.8518C2.13214 6.42857 6.55 2.00893 11.9786 2.00893C14.6357 2.00893 17.1 3.12857 18.9643 5.00357C20.8286 6.87857 21.8518 9.34286 21.8464 11.9179C21.8464 17.3464 17.3964 21.7607 11.9732 21.7607ZM17.3786 14.3357C17.1 14.1964 15.6429 13.4786 15.3857 13.3875C15.1286 13.2911 14.9411 13.2429 14.7536 13.5268C14.5661 13.8107 14.0036 14.475 13.8375 14.6679C13.6768 14.8554 13.5107 14.8821 13.2321 14.7429C11.4857 13.8696 10.3393 13.1893 9.18749 11.2071C8.89285 10.7089 9.51428 10.7518 10.0929 9.59464C10.1839 9.40714 10.1357 9.24643 10.0607 9.10714C9.98571 8.96786 9.38571 7.51071 9.15 6.95357C8.92071 6.41036 8.68571 6.49286 8.51785 6.48214C8.35714 6.47143 8.16964 6.47143 7.98214 6.47143C7.79464 6.47143 7.48928 6.54643 7.23214 6.82499C6.975 7.10893 6.20892 7.82678 6.20892 9.28393C6.20892 10.7411 7.26428 12.15 7.40357 12.3375C7.54821 12.525 9.37499 15.3268 12.1607 16.6071C14.1 17.5071 14.8714 17.5929 15.8571 17.4482C16.4518 17.3571 17.6143 16.7304 17.85 16.0768C18.0857 15.4232 18.0857 14.8661 18.0107 14.7375C17.9411 14.5982 17.7536 14.5179 17.3786 14.3357Z" fill="black"/>
                  </svg>
                  <Text fontSize="18px" fontWeight="600">+33 6 05 64 91 90</Text>
                </div>
                <div className="contact-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black"/>
                  </svg>
                  <Text fontSize="18px" fontWeight="600">contact@travioo.fr</Text>
                </div>
              </Text>
            </div>
            {/* <div className="map-container">
              <GoogleMap />
            </div> */}
          </div>
        
          <div className="form-container">
            <ContactForm />
          </div>
        </div>
      </DownloadAppPageContainer>
      {ContourLines.map((item, key) => item)}
    </DownloadAppPageWrapper>
  );
};

export default DownloadAppPage;
