import React from "react";
import MyPage from "../components/_UI/MyPage";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import H1 from "../components/_UI/H1";
import { useSelector } from "react-redux";
import SignInOpenBtn from "../components/SignInOpenBtn";

function Home() {
  const { isAuth } = useSelector(state => state.auth);

  return (
    <MyPage
      classNames={`bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')]`}
    >
      <div className="min-h-screen relative flex gap-8 items-center justify-center flex-col">
        <H1 classNames={"text-center mx-auto"}>
          Так-ли ты хорош в программировании? <br />
          Пройди наши задачи и узнай!
        </H1>
        {isAuth ? (
          <div className="flex gap-4">
            <Link to="tasks">
              <Button variant="outlined">Задачи</Button>
            </Link>
          </div>
        ) : (
          <SignInOpenBtn />
        )}
      </div>
    </MyPage>
  );
}

export default Home;
