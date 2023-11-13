import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextField from '@mui/material/TextField';

interface FormInputProps {
  label: string;
  name: string;
  type: string | undefined;
}

const AppTextInput: React.FC<FormInputProps> = ({ 
    label, 
    name,
    type, 
}) => (
  <div>
    {/* <label htmlFor={name}>{label}:</label> */}
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <TextField
            id={name}
            label={label}
            type={type}
            variant="outlined"
            fullWidth
            {...field}
          />
          <ErrorMessage name={name} component="div" />
        </div>
      )}
    </Field>
  </div>
);

export default AppTextInput;
