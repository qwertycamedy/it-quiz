import React from 'react'
import { useDispatch } from "react-redux";
import { openModal } from '../redux/slices/authSlice';
import { Button } from '@mui/material';

const SignInOpenBtn = () => {
    const dispatch = useDispatch();
    const handleOpenModal = () => {
      dispatch(openModal(true));
    }
  return (
    <Button onClick={handleOpenModal} variant="contained">
      Войти
    </Button>
  )
}

export default SignInOpenBtn