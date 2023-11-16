// RadioGroupInput.tsx
import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface RadioGroupInputProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
}

const AppRadioInput: React.FC<RadioGroupInputProps> = ({ label, name, options }) => (
  <div>
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <RadioGroup {...field} row>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          <ErrorMessage name={name} component="div" />
        </div>
      )}
    </Field>
  </div>
);

export default AppRadioInput;
