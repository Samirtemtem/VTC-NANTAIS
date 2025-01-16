import React from "react";
import { Link } from "react-router-dom";

// Styled components
import * as Styled from "./MainSection.styles";

// main section data
import { mainSectionData } from "./mainsectiondata/mainSectionData";

// Components
import { Text } from "@/components/text/Text";

// Colors
import { Theme } from "../../../styles/theme.styles";

// images
import DownloadAppButton from "@/components/button/DownloadAppButton";
import AppleLogo from "../../../assets/images/AppleLogo.png";
import GooglePlayLogo from "../../../assets/images/PlayStoreLogo.png";

// Define interface for sub-menu items
interface SubMenu {
  heading: string;
  link: string;
}

// Define interface for menu items
interface Menu {
  heading: string;
  submenu: SubMenu[];
}

const MainSection = () => {
  return (
    <Styled.MainSectionWrapper>
    </Styled.MainSectionWrapper>
  );
};

export default MainSection;
