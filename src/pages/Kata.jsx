import React, { useEffect, useState } from "react";
import MyPage from "../components/_UI/MyPage";
import H1 from "../components/_UI/H1";
import { Button, TextField } from "@mui/material";
import { BsDownload } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setKatas } from "../redux/slices/katasSlice";

const Kata = ({ filteredUsers }) => {
  const dispatch = useDispatch();
  const [kata, setKata] = useState({});
  const [value, setValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const { katas } = useSelector(state => state.katas);

  const location = useLocation();
  const navigate = useNavigate();

  const handleField = e => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    if (value.length >= 1) {
      setValue("");
      setIsSubmit(true);
    }
  };

  const handleSuccess = async id => {
    await axios.delete(
      `https://6466360f9c09d77a62006f18.mockapi.io/users/${filteredUsers.id}`
    );

    const newKatas = katas.map(obj =>
      obj.id !== id ? obj : { ...kata, isCompleted: true, isSuccess: true }
    );
    await axios.post(`https://6466360f9c09d77a62006f18.mockapi.io/users/`, {
      ...filteredUsers,
      katas: newKatas,
    });
    dispatch(setKatas(newKatas));

    navigate("/profile");
  };

  const handleUnSuccess = async id => {
    await axios.delete(
      `https://6466360f9c09d77a62006f18.mockapi.io/users/${filteredUsers.id}`
    );

    const newKatas = katas.map(obj =>
      obj.id !== id ? obj : { ...kata, isCompleted: true, isSuccess: false }
    );
    await axios.post(`https://6466360f9c09d77a62006f18.mockapi.io/users/`, {
      ...filteredUsers,
      katas: newKatas,
    });
    dispatch(setKatas(newKatas));

    navigate("/profile");
  };

  const handleRepeat = () => {
    setIsSubmit(false);
  };

  useEffect(() => {
    const trueKata = () => {
      const pageKata = katas.find(obj =>
        `/task/${obj.id}` === location.pathname ? obj : null
      );

      setKata(pageKata);
    };

    trueKata();
  }, []);

  return (
    <MyPage>
      <div className="py-[90px]">
        <div className="mb-10">
          <H1 classNames={"mb-4"}>Условие задачи:</H1>
          <p className="mb-4 font-bold">{kata.title}</p>
          <p className="mb-10">{kata.body}</p>
          <H1 classNames={"mb-4"}>Входные данные:</H1>
          <a
            className="flex gap-4 items-center bg-slate-400 hover:bg-slate-500 transition-colors duration-200 ease-linear text-white w-max p-4 rounded-md"
            href={kata.data}
            download
            target="_blank"
          >
            <BsDownload />
            <span>Скачать входные данные задачи</span>
          </a>
        </div>
        {isSubmit ? (
          <div className="grid gap-10">
            <div className="grid gap-4">
              <H1>Правильный ответ:</H1>
              <a
                className="flex gap-4 items-center bg-slate-400 hover:bg-slate-500 transition-colors duration-200 ease-linear text-white w-max p-4 rounded-md"
                href={kata.answer}
                download
                target="_blank"
              >
                <BsDownload />
                <span>Скачать ответ</span>
              </a>
            </div>
            <div className="grid gap-4">
              <H1>Сохранить как:</H1>
              <div className="flex gap-4">
                <Button
                  className="w-max"
                  variant="contained"
                  color="success"
                  onClick={() => handleSuccess(kata.id)}
                >
                  Верно
                </Button>
                <Button
                  className="w-max"
                  variant="contained"
                  color="error"
                  onClick={() => handleUnSuccess(kata.id)}
                >
                  Неверно
                </Button>
                <Button
                  className="w-max"
                  variant="contained"
                  onClick={handleRepeat}
                >
                  Заново
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 mb-10">
            <H1>Ответ задачи:</H1>
            <TextField
              placeholder="Ответ решения задачи"
              value={value}
              onChange={handleField}
            />
            <Button className="w-max" variant="contained" onClick={handleSave}>
              Проверить
            </Button>
          </div>
        )}
      </div>
    </MyPage>
  );
};

export default Kata;
