import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Title from "@/components/text/Title";
import { Theme } from "../../../styles/theme.styles";
import { Paragraph } from "@/components/text/Paragraph";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

interface FaqAccordionProps {
  title: string;
  text: string;
  expandIcon?: React.ReactElement;
  expandedIcon?: React.ReactElement;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 0,
  }
}));

const SubTitle = styled('h4')({
  fontSize: '18px',
  fontWeight: 900,
  margin: '20px 0 10px 0',
  color: Theme.colors.baseBlack,
});

const FaqAccordion = ({ title, text, expandIcon, expandedIcon }: FaqAccordionProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const formatText = (text: string) => {
    const parts = text.split(/###(.*?)###/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <SubTitle key={index}>{part}</SubTitle>;
      }
      return <Paragraph key={index}>{part}</Paragraph>;
    });
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary>
        <Title
          level={3}
          fontSize="18px"
          fontWeight="500"
          fontColor={Theme.colors.baseBlack}
        >
          {title}
        </Title>
        {expanded ? expandedIcon : expandIcon}
      </AccordionSummary>
      <AccordionDetails>
        {formatText(text)}
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
