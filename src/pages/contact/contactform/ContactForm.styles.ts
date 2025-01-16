import styled from "styled-components";
import { Theme } from "@/styles/theme.styles";

export const ContactFormWrapper = styled.section`
  padding: 24px;
`;

export const ContactFormContainer = styled.div`
  max-width: 770px;
  margin: 76px auto;
  text-align: center;
`;

export const FormContainer = styled.form``;

export const TextArea = styled.textarea`
  background-color: ${Theme.colors.whiteGrey};
  padding: 14px;
  border-radius: 6px;
  width: 100%;
  border: 2px solid transparent;
  height: 127px;
  font-family: inherit;
  font-size: 16px;
  box-sizing: border-box;
  :focus {
    border: 2px solid ${Theme.colors.baseBlack};
  }
  ::placeholder {
    color: ${Theme.colors.baseBlack};
  }
`;

export const FormWrapper = styled.div``;

export const Spacer = styled.div`
  margin: 16px;
`;
