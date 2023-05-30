import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Tests from "./pages/Tests";
import Test from "./pages/Test";
import Results from "./pages/Results";
import CreateTest from "./pages/CreateTest";
import Profile from "./pages/Profile";
import Auth from "./components/AuthModal";
import AuthModal from "./components/AuthModal";
import Kata from "./pages/Kata";
import Katas from "./pages/Katas";


function App() {
  return (
    <div className="App min-h-full flex flex-col bg-slate-100 font-mono">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Profile />} />
          <Route path="tasks" element={<Katas />} />
          <Route path="task" element={<Kata />} />
        </Routes>

        <AuthModal />
    </div>
  );
}

export default App;
