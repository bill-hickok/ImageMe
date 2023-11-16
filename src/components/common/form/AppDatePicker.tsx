import React, { ComponentPropsWithoutRef } from "react";
import { Field, useField, useFormikContext } from 'formik';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type FormDatePickerProps = ComponentPropsWithoutRef<'form'> & {
  disabled?: boolean;
  label: string;
  name: string;
};

const AppDatePicker = ({
  children,
  disabled,
  label,
  name,
  ...props
}: FormDatePickerProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, fieldMeta] = useField(name);

  const handleChange = (date: Date | null) => {
    setFieldValue(name, date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={field.value || null}
        onChange={handleChange}
        label={label}
        sx={{ width: '100%' }}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
}

export default AppDatePicker;