import { Box, Modal, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/authSlice";
import { GrClose } from "react-icons/gr";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  pt: 8
};
const closeStyle = {
  position: "absolute",
  right: "15px",
  top: "15px",
};

const MyModal = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const { modalIsOpen } = useSelector(state => state.auth);
  const handleClose = () => {
    dispatch(closeModal(false));
  };

  return (
    <Modal open={modalIsOpen} onClose={handleClose} {...props}>
      <Box sx={boxStyle}>
        <IconButton onClick={handleClose} sx={closeStyle} aria-label="delete">
          <GrClose />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default MyModal;
