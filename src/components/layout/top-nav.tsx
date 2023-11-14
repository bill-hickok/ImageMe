import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";
import DocTypes from "../common/form/doc-types";
import XmlMappings from "../common/form/keywords";
import Keywords from "../common/form/keywords";

interface NavigationBarProps {
  onTabChange: (value: number) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TopNavigationBar: React.FC<NavigationBarProps> = ({ onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
    onTabChange(newValue);
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
          Mapping Configurations
        </Typography>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Document Types" />
            <Tab label="Keywords" />
            <Tab label="XML Mappings" />
            <Tab label="Legacy to Onbase" />
            <Tab label="Activity Log" />
          </Tabs>
        </Box>
      </div>
      {value === 0 && <DocTypes />}
      {value === 1 && <Keywords />}
    </>
  );
};

export default TopNavigationBar;
