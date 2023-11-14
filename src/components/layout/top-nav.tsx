import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@mui/material';

interface NavigationBarProps {
  onTabChange: (value: number) => void;
}

const TopNavigationBar: React.FC<NavigationBarProps> = ({ onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <div style={{ backgroundColor: 'white', color: 'black', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h4" style={{ padding: '8px', color: 'black' }}>
        Mapping Configurations
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab label="Document Types" />
        <Tab label="XML Mappings" />
        <Tab label="Legacy to Onbase" />
        <Tab label="Activity Log" />
      </Tabs>
    </div>
  );
};

export default TopNavigationBar;
