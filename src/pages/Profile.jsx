import React, { useState } from "react";
import MyPage from "../components/_UI/MyPage";
import MySection from "../components/_UI/MySection";
import { NavLink, useLocation } from "react-router-dom";
import H1 from "../components/_UI/H1";
import { Button, ButtonGroup } from "@mui/material";
import Settings from "../components/Settings";
import { useSelector } from "react-redux";
import KataBlock from "../components/KataBlock";
import CompletedKataBlock from "../components/CompletedKataBlock";

function Profile() {
  const { nickname } = useSelector(state => state.auth);
  const { katas } = useSelector(state => state.katas);
  const [tabs, setTabs] = useState(true);

  const location = useLocation();

  const isActive = ({ isActive }) =>
    isActive
      ? "underline text-blue-400 pointer-events-none"
      : "hover:underline";

  return (
    <MyPage>
      <div className="flex gap-8 relative py-24">
        <MySection classNames={"sticky top-24 h-max"}>
          <NavLink to="/profile" className={isActive}>
            Профиль
          </NavLink>
          <NavLink to="/settings" className={isActive}>
            Настройки
          </NavLink>
        </MySection>

        {location.pathname === "/profile" ? (
          <div className="flex flex-col w-full gap-8">
            <MySection classNames={"w-full"}>
              <div className="flex items-end gap-6">
                <img
                  className="w-32 h-32"
                  src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png"
                  alt="user"
                />
                <div className="flex flex-col gap-2 pb-2">
                  <H1>{nickname}</H1>
                </div>
              </div>
            </MySection>
            <div className="flex gap-4 justify-between">
              <ButtonGroup className="w-max">
                <Button
                  variant={tabs ? "contained" : "outlined"}
                  onClick={() => setTabs(true)}
                >
                  Все задачи
                </Button>
                <Button
                  variant={tabs ? "outlined" : "contained"}
                  onClick={() => setTabs(false)}
                >
                  Пройденные задачи
                </Button>
              </ButtonGroup>
            </div>
            {tabs ? (
              <div className="flex flex-col gap-8">
                {katas.map(
                  kata =>
                    !kata.isCompleted && <KataBlock kata={kata} key={kata.id} />
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {katas.map(
                  kata =>
                    kata.isCompleted && (
                      <CompletedKataBlock kata={kata} key={kata.id} />
                    )
                )}
              </div>
            )}
          </div>
        ) : (
          <Settings />
        )}
      </div>
    </MyPage>
  );
}

export default Profile;
