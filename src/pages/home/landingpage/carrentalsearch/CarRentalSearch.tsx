import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../../../styles/theme.styles";
import { Text } from "@/components/text/Text";
import Image from "@/components/image/Image";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledOption,
  SearchContainer,
} from "./CarRentalSearch.styles";
import FromLocationIcon from "../../../../assets/images/FromLocationIcon.png";
import ToLocationIcon from "../../../../assets/images/ToLocationIcon.png";
import SearchIcon from "../../../../assets/images/SearchIcon.png";
import { LocationsData } from "./LocationsData";
import ActionButton from "@/components/button/ActionButton";

import { BookingContext } from "@/context/BookingContext";

import { Formik, Field } from "formik";
import * as Yup from "yup";

interface FormValues {
  date: string;
  time: string;
  from: string;
  to: string;
}

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  from: Yup.string().required("From location is required"),
  to: Yup.string().required("To location is required"),
});

interface BookingData {
  date: string;
  time: string;
  from: string;
  to: string;
}

const CarRentalSearch = () => {
  const { setBookingData } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    setBookingData((prevData: BookingData) => ({
      ...prevData,
      date: values.date,
      time: values.time,
      from: values.from,
      to: values.to,
    }));
    navigate("/booking/vehicles");
  };

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        from: "",
        to: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validator={() => ({})}
    >
      {({ handleSubmit }) => (
        <SearchContainer backGround={Theme.colors.white}>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel backGround={Theme.colors.white}>
              <Field type="date" name="date" as={StyledInput} />
            </StyledLabel>

            <StyledLabel backGround={Theme.colors.white}>
              <Field type="time" name="time" as={StyledInput} />
            </StyledLabel>

            <StyledLabel backGround={Theme.colors.white}>
              <Image src={FromLocationIcon} alt="from-arrow" width="20px" />
              <Field as={StyledSelect} name="from">
                <StyledOption value="">Select Location</StyledOption>
                {LocationsData.map(({ value, location }) => (
                  <StyledOption key={value} value={value}>
                    {location}
                  </StyledOption>
                ))}
              </Field>
            </StyledLabel>

            <StyledLabel backGround={Theme.colors.white}>
              <Image src={ToLocationIcon} alt="from-arrow" width="20px" />
              <Field as={StyledSelect} name="to">
                <StyledOption value="">Select Location</StyledOption>
                {LocationsData.map(({ value, location }) => (
                  <StyledOption key={value} value={value}>
                    {location}
                  </StyledOption>
                ))}
              </Field>
            </StyledLabel>

            <ActionButton borderRadius="60px" type="submit">
              <Image src={SearchIcon} alt="search-icon" width="20px" />
              <Text
                fontSize="16px"
                fontColor={Theme.colors.white}
                fontWeight="500"
              >
                Search
              </Text>
            </ActionButton>
          </StyledForm>
        </SearchContainer>
      )}
    </Formik>
  );
};

export default CarRentalSearch;
