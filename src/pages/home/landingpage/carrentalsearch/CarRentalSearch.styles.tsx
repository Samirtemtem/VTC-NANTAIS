import styled from "styled-components";
import { Form } from "formik";
interface Props {
  backGround?: string;
  backGroundIcon?: string;
}
export const SearchContainer = styled.div<Props>`
  border-radius: 100px;
  background-color: ${({ backGround }) => backGround};

  @media only screen and (max-width: 990px) {
    flex-direction: column;
    gap: 8px;
    background-color: transparent;
    align-items: flex-start;
    max-width: 500px;
    padding: 0px;
    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const StyledForm = styled(Form)<Props>`
  display: flex;
  justify-content: space-between;
  padding: 18px 24px;
  @media only screen and (max-width: 990px) {
    padding: 16px;
    flex-direction: column;
    gap: 8px;
    background-color: transparent;
    align-items: flex-start;
    max-width: 500px;
    padding: 0px;
    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const StyledLabel = styled.label<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  img {
    background-color: #f6f6f6;
    padding: 16px;
    border-radius: 50%;
    cursor: pointer;
  }
  @media only screen and (max-width: 990px) {
    background-color: ${({ backGround }) => backGround};
    width: 100%;

    justify-content: flex-start;
    border-radius: 6px;
    span {
      display: none;
    }
  }
`;
export const StyledInput = styled.input<Props>`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  border: none;
  border-radius: 100px;
  height: 100%;
  width: 180px;

  ::-webkit-calendar-picker-indicator {
    background-color: #f6f6f6;
    padding: 16px;
    border-radius: 50%;

    cursor: pointer;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  width: 100%;
`;

export const StyledOption = styled.option``;
