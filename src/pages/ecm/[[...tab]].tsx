import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import Button from "@mui/material/Button";
import TopNavigationBar from "~/components/layout/top-nav";
import Modal from "~/components/common/modal/modal";
import Form from "~/components/common/form/form";
import { useState } from "react";
import {
  TabsEnum,
  getTabComponent,
} from "~/components/common/enums/top-nav-enums";
import { FormikValues } from "formik";
import AppDatePicker from "~/components/common/form/AppDatePicker";

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
  
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <AppTextbox label="Description" name="description" />
            <Modal open={isModalOpen} handleClose={handleCloseModal} title={"Test Modal"}>
              <AppRadioInput
                label="Gender"
                name="gender"
                options={genderOptions}
              />
              <AppDatePicker
                label="Date"
                name="date"
              />
            </Modal>
            <Button variant="text" onClick={handleOpenModal}>Open Modal</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
