import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  modalIsOpen: false,
  nickname: "",
  password: "",
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

    setNickname: (state, action) => {
      state.nickname = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    signIn: (state, action) => {
      state.isAuth = action.payload;
    },
    signOut: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { openModal, closeModal, setNickname, setPassword, signIn, signOut } =
  authSlice.actions;

export default authSlice.reducer;
