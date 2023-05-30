import React, { useState } from "react";
import MyPage from "../components/_UI/MyPage";
import H1 from "../components/_UI/H1";
import MySection from "../components/_UI/MySection";
import { Button, TextField } from "@mui/material";
import { BsDownload } from "react-icons/bs";

const Kata = () => {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState("");

  const handleField = e => {
    setValue(e.target.value);
    setSaved(value);
  };

  const handleSave = () => {
    setSaved(value);
    setValue("");
    console.log(saved);
  };

  return (
    <MyPage>
      <div className="pt-[90px]">
        <div className="mb-10">
          <H1 classNames={"mb-4"}>Условие задачи:</H1>
          <p className="mb-4 font-bold">Простейшие арифметические операции</p>
          <p className="mb-10">
            Написать функцию arithmetic, принимающую 3 аргумента: первые 2 -
            числа, третий - операция, которая должна быть произведена над ними.
            Если третий аргумент +, сложить их; если —, то вычесть; * —
            умножить; / — разделить (первое на второе). В остальных случаях
            вернуть строку "Неизвестная операция".
          </p>
          <H1 classNames={"mb-4"}>Входные данные:</H1>
          <a
            className="flex gap-4 items-center bg-slate-400 hover:bg-slate-500 transition-colors duration-200 ease-linear text-white w-max p-4 rounded-md"
            href="https://qwertycamedy.ru/sites/it-quiz/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8.docx"
            download
          >
            <BsDownload />
            <span>Скачать входные данные задачи</span>
          </a>
        </div>
        <div className="grid gap-4">
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
      </div>
    </MyPage>
  );
};

export default Kata;
