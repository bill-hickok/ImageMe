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

export default function Home() {
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.DocTypes);
  const [tabChildren, setTabChildren] = useState<React.ReactNode>(
    getTabComponent(tab),
  );

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const changeTab = (tab: TabsEnum) => {
    setTab(tab);
    setTabChildren(getTabComponent(tab));
  };

  return (
    <>
      <div>
        <TopNavigationBar
          title="Mapping Configuration"
          onTabChange={changeTab}
          selectedTab={tab}
        >
          {tabChildren}
        </TopNavigationBar>
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
