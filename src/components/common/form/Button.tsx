import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Include add icon
   */
  addIcon?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
  primary = false,
  size = "medium",
  addIcon = false,
  label,
  ...props
}: ButtonProps) => {
  const variant = primary ? "contained" : "outlined";
  return (
    <Button variant={variant} className="button" {...props} size={size}>
      {addIcon && <AddIcon />}
      {label}
    </Button>
  );
};
