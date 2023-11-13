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
import { makeStyles } from "@mui/styles";

type NewAppButtonProps = ComponentPropsWithoutRef<"button"> & {
  label?: string;
};

const useStyles = makeStyles((theme) => ({
  button: {
    // Customize your button styles here
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const AppSubmitButton = ({ label, ...props }: NewAppButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      type="button"
      className={`${classes.button} button-regular-general-filled`}
      {...props}
    >
      {label ? label : props.children}
    </Button>
  );
};

export default AppSubmitButton;

