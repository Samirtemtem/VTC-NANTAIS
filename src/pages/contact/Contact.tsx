// React imports
import React, { Fragment } from "react";

// Styled components import
import * as Styled from "./Contact.styles";

// Component imports
import HeroPages from "@/components/heropages/HeroPages";
import GoogleMap from "@/components/googlemap/GoogleMap";
import ContactForm from "./contactform/ContactForm";
const Contact = () => {
  return (
    <Fragment>
      <HeroPages name="Contact Us" />

      <GoogleMap />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
