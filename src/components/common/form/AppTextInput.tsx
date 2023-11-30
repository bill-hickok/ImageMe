import React, { ComponentPropsWithoutRef } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import TextField from "@mui/material/TextField";

type FormInputProps = ComponentPropsWithoutRef<typeof TextField> & {
  label: string;
  name: string;
  type: string | undefined;
};

const AppTextInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  ...props
}) => (
  <div className="my-2">
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
            {...props}
          />
          <ErrorMessage name={name} component="div" />
        </div>
      )}
    </Field>
  </div>
);

export default AppTextInput;
