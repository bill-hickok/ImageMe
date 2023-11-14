import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { TextareaAutosize } from '@mui/material';

interface TextareaInputProps {
  label: string;
  name: string;
}

const AppTextbox: React.FC<TextareaInputProps> = ({ label, name }) => (
  <div>
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div>
          <TextareaAutosize
            id={name}
            minRows={3}
            maxRows={10}
            placeholder={label}
            {...field}
          />
          <ErrorMessage name={name} component="div" />
        </div>
      )}
    </Field>
  </div>
);

export default AppTextbox;
