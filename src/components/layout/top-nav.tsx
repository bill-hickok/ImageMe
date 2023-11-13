import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@mui/material';

interface NavigationBarProps {
  onTabChange: (value: number) => void;
}

const TopNavigationBar: React.FC<NavigationBarProps> = ({ onTabChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', height: '64px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        style={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}
      >
        <Typography variant="h6" style={{ marginLeft: 'auto', padding: '8px', color: 'black' }}>
          Mapping Configurations
        </Typography>
        <Tab label="Document Types" />
        <Tab label="XML Mappings" />
        <Tab label="Legacy to Onbase" />
        <Tab label="Activity Log" />
      </Tabs>
    </AppBar>
  );
};

export default TopNavigationBar;
