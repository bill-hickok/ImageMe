import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { TabsEnum } from "../../pages/ecm/ecm";

interface TabNavigationProps {
  children?: React.ReactNode;
  selectedTab: TabsEnum;
  onTabChange: (tab: TabsEnum) => void;
  title: string;
}

const TabNavigation: React.FC<TabNavigationProps> = (props) => {
  const { children, selectedTab, onTabChange, title } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: TabsEnum) => {
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
          {title}
        </Typography>
        <Box>
          <Tabs value={selectedTab} onChange={handleChange} centered>
            {children}
          </Tabs>
        </Box>
      </div>
    </>
  );
};

export default TabNavigation;
