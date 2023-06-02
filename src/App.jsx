import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Auth from "./components/AuthModal";
import AuthModal from "./components/AuthModal";
import Kata from "./pages/Kata";
import Katas from "./pages/Katas";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./redux/slices/usersSlice";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  const { nickname } = useSelector(state => state.auth);

  useEffect(() => {
    axios
      .get("https://6466360f9c09d77a62006f18.mockapi.io/users")
      .then(res => {
        const { data } = res;
        dispatch(setUsers(data));
      })
      .catch(err => console.log(`Произошла ошибка: ${err}`));
  }, []);

  const filteredUsers = users.filter(user => user.nickname === nickname)[0];
  console.log(filteredUsers);

  return (
    <div className="App min-h-full flex flex-col bg-slate-100 font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="profile" element={<Profile filteredUsers={filteredUsers} />} />
        <Route path="settings" element={<Profile />} />
        <Route path="tasks" element={<Katas filteredUsers={filteredUsers} />} />
        <Route path="task/:id" element={<Kata filteredUsers={filteredUsers} setUsers={setUsers} />} />
      </Routes>

      <AuthModal users={users} />
    </div>
  );
}

export default App;
