import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import DocTypes from "../common/form/doc-types";
import XmlMappings from "../common/form/keywords";
import Keywords from "../common/form/keywords";
import { TabsEnum } from "../common/enums/top-nav-enums";

interface TopNavigationBarProps {
  children?: React.ReactNode;
  selectedTab: TabsEnum;
  onTabChange: (tab: TabsEnum) => void;
  title: string;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = (props) => {
  const { children, selectedTab, onTabChange, title } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: TabsEnum) => {
    onTabChange(newValue);
  };

  console.log("HERE");

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" style={{ padding: "8px", color: "black" }}>
          {title}
        </Typography>
        <Box>
          <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label="Doc Types" value={TabsEnum.DocTypes} />
            <Tab label="Keywords" value={TabsEnum.Keywords} />
            <Tab label="XML Mappings" value={TabsEnum.XMLMappings} />
            <Tab label="Legacy To OnBase" value={TabsEnum.LegacyToOnBase} />
            <Tab label="Activity Log" value={TabsEnum.ActivityLog} />
          </Tabs>
        </Box>
      </div>
      {children}
    </>
  );
};

export default TopNavigationBar;
