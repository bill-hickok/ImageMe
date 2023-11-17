import React, { ComponentPropsWithoutRef } from "react";
import { Field, useField, useFormikContext } from 'formik';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type FormTimePickerProps = ComponentPropsWithoutRef<'form'> & {
  disabled?: boolean;
  label: string;
  name: string;
};

const AppTimePicker = ({
  children,
  disabled,
  label,
  name,
  ...props
}: FormTimePickerProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, fieldMeta] = useField(name);

  const handleChange = (date: Date | null) => {
    setFieldValue(name, date);
  };

  return (
    <div className="my-8 mx-8">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={field.value || null}
          onChange={handleChange}
          label={label}
          sx={{ width: '100%' }}
          disabled={disabled}
        />
      </LocalizationProvider>
    </div>
  );
}

export default AppTimePicker;
