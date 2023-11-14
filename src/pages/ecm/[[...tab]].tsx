import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";
import { FormikValues } from "formik";
import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import Button from "@mui/material/Button";
import TopNavigationBar from "~/components/layout/top-nav";
import Form from "~/components/common/form/form";
// import TopNavigationBar from '../../layout/top-nav';
import { Ref, useState } from "react";

export default function Home() {
  const [tap, setTab] = useState<number>(0)
  
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const changeTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <>
      <div>
        <TopNavigationBar onTabChange={changeTab}/>
        <Form
          handleSubmit={function (values: FormikValues): void {
            throw new Error("Function not implemented.");
          }}
          handleChanged={function (values: FormikValues): void {
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
