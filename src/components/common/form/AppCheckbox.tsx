import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export interface CheckboxGroupInputProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
}

const AppCheckbox: React.FC<CheckboxGroupInputProps> = ({ label, name, options }) => (
  <div>
    <label>{label}:</label>
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={field.value.includes(option.value)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      if (isChecked) {
                        field.onChange([...field.value, option.value]);
                      } else {
                        field.onChange(field.value.filter((val: string) => val !== option.value));
                      }
                    }}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
          <ErrorMessage name={name} component="div" />
        </div>
      )}
    </Field>
  </div>
);

export default AppCheckbox;
