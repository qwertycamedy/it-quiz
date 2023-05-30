import React from "react";
import MyLogo from "./_UI/MyLogo";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import SignInOpenBtn from "./SignInOpenBtn";

function Header() {
  const { isAuth } = useSelector(state => state.auth);
  const nav = useSelector(state => state.nav);

  const isActive = ({ isActive }) =>
    isActive
      ? "underline text-blue-400 pointer-events-none"
      : "hover:underline";
  const isProfile = ({ isActive }) =>
    isActive
      ? "border-2 border-blue-400 rounded-full flex items-center justify-center"
      : "flex items-center justify-center rounded-full p-[2px]"; 

  return (
    <header className="fixed z-50 left-0 top-0 w-full bg-white shadow-md">
      <Container maxWidth="lg">
        <div className="flex items-center justify-between py-4">
          <MyLogo />
          <div className="flex items-center gap-8">
            {isAuth ? (
              <>
                <ul className="flex items-center gap-4">
                  {nav.map(item => (
                    <li key={item.id}>
                      <NavLink to={item.to} className={isActive}>
                        {item.body}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <NavLink to={"profile"} className={isProfile}>
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png"
                    alt="user"
                  />
                </NavLink>
              </>
            ) : (
              <SignInOpenBtn />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
