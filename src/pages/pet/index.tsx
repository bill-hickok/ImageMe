import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import Button from "@mui/material/Button";
import TopNavigationBar from "~/components/layout/top-nav";
import Form from "~/components/common/form/form";
import { useState } from "react";
import {
  TabsEnum,
  getTabComponent,
} from "~/components/common/enums/top-nav-enums";
import { FormikValues } from "formik";
import { useGetPetByIdQuery } from "~/store/petApi";

export default function Home() {
  const { data: pet, error, isLoading } = useGetPetByIdQuery(1);

  //TODO: Add a loading spinner
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
      <h3>{pet?.name}</h3>
      </div>
    </>
  );
}
