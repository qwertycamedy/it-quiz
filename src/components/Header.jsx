import React from "react";
import MyLogo from "./_UI/MyLogo";
import { Link, NavLink } from "react-router-dom";
import { Container } from "@mui/material";

function Header() {
  const isActive = ({isActive}) => isActive ? 'underline' : '';

  return (
    <header className="bg-white shadow-md">
      <Container maxWidth="lg">
        <div className="flex items-center justify-between py-4">
          <MyLogo />
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink to="/" className={isActive}>Home</NavLink>
              </li>
              <li>
                <NavLink to="tests" className={isActive}>Tests</NavLink>
              </li>
              <li>
                <NavLink to="test/1" className={isActive}>Test</NavLink>
              </li>
            </ul>
            <Link className="flex items-center gap-4">
              <img
                className="w-6 h-6 rounded-full"
                src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png"
                alt="user"
              />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
