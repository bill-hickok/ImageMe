import React from 'react';
import { useField, useFormikContext } from 'formik';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface IDropdownOption {
  value: string;
  label: string;
}

interface IDropdownProps {
  name: string;
  options: IDropdownOption[];
  label: string;
  disabled?: boolean;
}

const Dropdown = ({ name, options, label, disabled }: IDropdownProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, fieldMeta] = useField(name);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setFieldValue(name, selectedValue);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        id={name}
        name={name}
        onChange={handleChange}
        value={field.value || ''}
        disabled={disabled}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
