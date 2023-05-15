import React from "react";
import MyModal from "./_UI/MyModal";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setModalInput, signIn } from "../redux/slices/authSlice";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { modalInput } = useSelector(state => state.auth);
  
  const handleInput = e => {
    dispatch(setModalInput(e.target.value));
  };
  const onSignIn = () => {
    if (modalInput.length >= 3) {
      dispatch(signIn(true));
      dispatch(closeModal(false));
    }
  };

  return (
    <MyModal>
      <TextField
        value={modalInput}
        onChange={handleInput}
        label="Уникальный ник"
        variant="outlined"
      />
      <Button variant="contained" onClick={onSignIn}>
        Вперед!
      </Button>
    </MyModal>
  );
};

export default AuthModal;
