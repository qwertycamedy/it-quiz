import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true,
  modalIsOpen: false,
  modalInput: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    closeModal: (state, action) => {
      state.modalIsOpen = action.payload;
    },

    setModalInput: (state,action) => {
        state.modalInput = action.payload;
    },

    signIn: (state, action) => {
        state.isAuth = action.payload;
    },
    signOut: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { openModal, closeModal, setModalInput, signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
