import React from "react";
import "./button.css";
import AddIcon from "@mui/icons-material/Add";

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
export const Button = ({
  primary = false,
  size = "medium",
  addIcon = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "primaryButton" : "secondaryButton";
  return (
    <button
      type="button"
      className={["button", `${size}Button`, mode].join(" ")}
      {...props}
    >
      {addIcon && <AddIcon />}
      {label}
    </button>
  );
};
