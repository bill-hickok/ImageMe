// ParentForm.tsx
import React, { Children, ComponentPropsWithoutRef } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import AppTextInput from "./AppTextInput";
import AppSubmitButton from "./AppSubmitButton";
import AppRadioInput from "./AppRadioInput";
import AppTextbox from "./AppTextbox";
import AppDataGrid from "./AppDataGrid";
import { FormControl } from "@mui/material";

// interface FormValues {
//   name: string;
//   gender: string;
//   hobbies: string[];
//   description: string;
// }

type FormProps = ComponentPropsWithoutRef<"form"> & {
  handleSubmit: (values: FormikValues) => void;
  handleChanged: (values: FormikValues) => void;
  // initalValues: FormikValues;
};

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   gender: Yup.string().required('Gender is required'),
//   hobbies: Yup.array().min(1, 'Select at least one hobby'),
//   description: Yup.string(),
// });

const Form = ({ children, ...props }: FormProps) => {
  const handleSubmit = (values: FormikValues, actions: any) => {
    // Handle form submission logic here
    console.log(values);
    // actions.setSubmitting(false);
  };

  const handleTabChange = (value: number) => {
    // Handle tab change logic here if needed
    console.log("Selected tab:", value);
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <Formik
      initialValues={{ name: "", gender: "", hobbies: [], description: "" }}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div>
        <FormControl>{children}</FormControl>
      </div>
    </Formik>
  );
};

export default Form;
