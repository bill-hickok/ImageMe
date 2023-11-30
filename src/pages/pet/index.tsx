import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import Button from "@mui/material/Button";
import TopNavigationBar from "~/components/layout/TabNavigation";
import Form from "~/components/common/form/form";
import { useState } from "react";
import {
  TabsEnum,
  getTabComponent,
} from "~/pages/ecm/ecm";
import { FormikValues } from "formik";
import { useGetPetByIdQuery } from "~/store/petApi";

export default function Home() {
  const { data: pet, error, isLoading } = useGetPetByIdQuery(1);

  //TODO: Add a loading spinner
  if (isLoading) return <div>Loading...</div>;

  
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <>
      <div>
        <h3>{pet?.name}</h3>
        <Form
            handleSubmit={function (_values: FormikValues): void {
              throw new Error("Function not implemented.");
            }}
            handleChanged={function (_values: FormikValues): void {
              throw new Error("Function not implemented.");
            }}
          >
            <div>
              <AppTextInput label="Name" name="name" type="" />
              <AppTextInput label="Email" name="email" type="email" />
              <AppTextInput label="Password" name="password" type="password" />
              <AppRadioInput
                label="Gender"
                name="gender"
                options={genderOptions}
              />
              <AppTextbox label="Description" name="description" />
              <Button variant="text">Text</Button>
            </div>
          </Form>
      </div>
    </>
  );
}
