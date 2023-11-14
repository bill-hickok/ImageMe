import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import DocTypes from "../common/form/doc-types";
import XmlMappings from "../common/form/keywords";
import Keywords from "../common/form/keywords";

interface TopNavigationBarProps {
  children?: React.ReactNode;
  selectedTab: number;
  setSelectedTab: (value: string) => void;
  title: string;
  index: number;
  value: number;
}

const TopNavigationBar = ({ children, selectedTab, setSelectedTab, title }: TopNavigationBarProps) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setSelectedTab(newValue.toString());
  };

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
          <Tabs value={selectedTab} onChange={handleChange}>
            {children}
          </Tabs>
        </Box>
      </div>
      {/* {value === 0 && <DocTypes />}
      {value === 1 && <Keywords />} */}
    </>
  );
};

export default TopNavigationBar;

// const enum Tabs {
//   DocTypes: "Document Types",
//   Keywords,
//   XMLMappings,
//   LegacyToOnBase,
//   ActivityLog,
// }

// Mapping Configurations
{/* <Tab label="Document Types" />
<Tab label="Keywords" />
<Tab label="XML Mappings" />
<Tab label="Legacy to Onbase" />
<Tab label="Activity Log" /> */}