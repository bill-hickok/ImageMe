// import React from 'react';
// import Button from '@mui/material/Button';

// interface SubmitButtonProps {
//   children: React.ReactNode;
//   type?: 'button' | 'submit' | 'reset' | undefined;
// }

// const AppSubmitButton: React.FC<SubmitButtonProps> = ({ children, type = 'submit' }) => (
//   <Button type={type} variant="contained" color="primary">
//     {children}
//   </Button>
// );

// export default AppSubmitButton;

import React, { ComponentPropsWithoutRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, styled } from "@mui/material";

type NewAppButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  label?: string;
  primary?: boolean;
  size?: string;
  addIcon?: boolean;
};

const LabeledButton = ({
  primary = false,
  size = "medium",
  addIcon = false,
  label,
  ...props
}: NewAppButtonProps) => {
  const variant = primary ? "contained" : "outlined";
  return (
    <Button variant={variant} {...props} size={size} color="primary">
      {addIcon && <AddIcon />}
      {label}
    </Button>
  );
};

const AppSubmitButton = styled(LabeledButton)(
  ({ theme }) => `
  font-family: Source Sans 3;
 `,
);

export default AppSubmitButton;
