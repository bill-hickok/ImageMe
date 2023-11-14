import { Box, Modal as MaterialModal, Typography } from "@mui/material";
import React, { ComponentPropsWithoutRef, ReactNode } from "react";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",
  maxHeight: "85vh",
  p: 4,
};

type ModalProps = ComponentPropsWithoutRef<"form"> & {
  children: ReactNode;
  handleClose: () => void;
  open: boolean;
  title: string;
  buttonComponent?: ReactNode;
};

const Modal = ({ children, handleClose, title, open }: ModalProps) => {
  return (
    <MaterialModal
      onClose={handleClose}
      open={open}
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
    >
      <Box sx={boxStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            sx={{ marginBottom: "10px" }}
          >
            {title}
          </Typography>
        </Box>
        {children}
      </Box>
    </MaterialModal>
  );
}

export default Modal;