import AppTextInput from "~/components/common/form/AppTextInput";
import AppRadioInput from "~/components/common/form/AppRadioInput";
import AppTextbox from "~/components/common/form/AppTextbox";
import Button from "@mui/material/Button";
import TabNavigation from "~/components/layout/TabNavigation";
import Form from "~/components/common/form/form";
import { useState } from "react";
import {
  TabsEnum,
  getTabComponent,
} from "~/pages/ecm/ecm";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { FormikValues } from "formik";

export default function Home() {
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.DocTypes);
  const [selectedTab, setSelectedTab] = useState<React.ReactNode>(
    getTabComponent(tab),
  );


  const changeTab = (tab: TabsEnum) => {
    console.log("HERE", selectedTab);
    setTab(tab);
    setSelectedTab(getTabComponent(tab));
  };

  return (
    <>
      <div>
        <TabNavigation
          title="Mapping Configuration"
          onTabChange={changeTab}
          selectedTab={tab}
        >
          <Tab label="Doc Types" value={TabsEnum.DocTypes} />
          <Tab label="Keywords" value={TabsEnum.Keywords} />
          <Tab label="Cat Breeds" value={TabsEnum.CatBreeds} />
          <Tab label="XML Mappings" value={TabsEnum.XMLMappings} />
          <Tab label="Legacy To OnBase" value={TabsEnum.LegacyToOnBase} />
          <Tab label="Activity Log" value={TabsEnum.ActivityLog} />
        </TabNavigation>
        {selectedTab}
      </div>
    </>
  );
}
