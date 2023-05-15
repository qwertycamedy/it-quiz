import React from "react";
import { IconButton, Switch } from "@mui/material";
import { MdExitToApp } from "react-icons/md";
import MySection from "./_UI/MySection";
import H1 from "./_UI/H1";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
     dispatch(signOut(false));
     navigate('/');
  }

  return (
    <div className="flex flex-col w-full gap-8">
      <MySection classNames={"w-full"}>
        <div className="flex items-center justify-between">
          <H1>Темная тема:</H1>
          <Switch size="large" />
        </div>
      </MySection>
      <MySection classNames={"w-full"}>
        <div className="flex items-center justify-between">
          <H1>Выйти из аккаунта:</H1>
          <IconButton onClick={handleSignOut} color="error" size="large">
            <MdExitToApp />
          </IconButton>
        </div>
      </MySection>
    </div>
  );
};

export default Settings;
