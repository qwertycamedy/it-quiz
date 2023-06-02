import React from "react";
import MyModal from "./_UI/MyModal";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  signIn,
  setNickname,
  setPassword,
} from "../redux/slices/authSlice";
import axios from "axios";

const AuthModal = ({ users }) => {
  const dispatch = useDispatch();
  const { nickname, password } = useSelector(state => state.auth);

  const handleNickname = e => {
    dispatch(setNickname(e.target.value));
  };
  const handlePassword = e => {
    dispatch(setPassword(e.target.value));
  };

  const onSignIn = () => {
    if (nickname.length >= 3 && password.length >= 3) {
      if (users.find(user => user.nickname.includes(nickname))) {
        dispatch(signIn(true));
        dispatch(closeModal(false));
      } else {
        dispatch(signIn(true));
        dispatch(closeModal(false));
        axios.post("https://6466360f9c09d77a62006f18.mockapi.io/users", {
          id: users.length + 1,
          nickname,
          password,
          katas: [
            {
              "id": 1,
              "title": "Простейшие арифметические операции",
              "body": "Написать функцию arithmetic, принимающую 3 аргумента: первые 2 - числа, третий - операция, которая должна быть произведена над ними. Если третий аргумент +, сложить их; если —, то вычесть; * — умножить; / — разделить (первое на второе). В остальных случаях вернуть строку \"Неизвестная операция\".",
              "data": "https://qwertycamedy.ru/sites/it-quiz/arifm/arifmOp.txt",
              "answer": "https://qwertycamedy.ru/sites/it-quiz/arifm/arifmOpAnswers.txt",
              "isCompleted": false,
              "isSuccess": false
            },
            {
              "id": 2,
              "title": "Високосный год ",
              "body": "Написать функцию is_year_leap, принимающую 1 аргумент — год, и возвращающую True, если год високосный, и False иначе.",
              "data": "https://qwertycamedy.ru/sites/it-quiz/isYearLeap/isYearLeap.txt",
              "answer":
                "https://qwertycamedy.ru/sites/it-quiz/isYearLeap/isYearLeapAnswers.txt",
                "isCompleted": false,
                "isSuccess": false
            },
            {
              "id": 3,
              "title": "Периметр",
              "body": "Написать функцию perimeter, принимающую 2 аргумента — ширину и длину прямоугольника, и возвращающую периметр.",
              "data": "https://qwertycamedy.ru/sites/it-quiz/perimeter/perimeter.txt",
              "answer":
                "https://qwertycamedy.ru/sites/it-quiz/perimeter/perimeterAnswers.txt",
                "isCompleted": false,
                "isSuccess": false
            },
            {
              "id": 4,
              "title": "Площадь",
              "body": "Написать функцию square, принимающую 2 аргумента — ширину и длину прямоугольника, и возвращающую площадь.",
              "data": "https://qwertycamedy.ru/sites/it-quiz/square/square.txt",
              "answer": "https://qwertycamedy.ru/sites/it-quiz/square/squareAnswers.txt",
              "isCompleted": false,
              "isSuccess": false
            },
            {
              "id": 5,
              "title": "Времена года",
              "body": "Написать функцию season, принимающую 1 аргумент — номер месяца (от 1 до 12), и возвращающую время года, которому этот месяц принадлежит (зима, весна, лето или осень).",
              "data": "https://qwertycamedy.ru/sites/it-quiz/season/season.txt",
              "answer": "https://qwertycamedy.ru/sites/it-quiz/season/seasonAnswers.txt",
              "isCompleted": false,
              "isSuccess": false
            },
            {
              "id": 6,
              "title": "Банковский вклад ",
              "body": "Пользователь делает вклад в размере a рублей сроком на years лет под 10% годовых (каждый год размер его вклада увеличивается на 10%. Эти деньги прибавляются к сумме вклада, и на них в следующем году тоже будут проценты). Написать функцию bank, принимающая аргументы a и years, и возвращающую сумму, которая будет на счету пользователя.",
              "data": "https://qwertycamedy.ru/sites/it-quiz/bank/bank.txt",
              "answer": "https://qwertycamedy.ru/sites/it-quiz/bank/bankAnswers.txt",
              "isCompleted": false,
              "isSuccess": false
            },
            {
              "id": 7,
              "title": "Простые числа ",
              "body": "Написать функцию is_prime, принимающую 1 аргумент — число от 0 до 1000, и возвращающую True, если оно простое, и False - иначе.",
              "data": "https://qwertycamedy.ru/sites/it-quiz/isPrime/isPrime.txt",
              "answer":
                "https://qwertycamedy.ru/sites/it-quiz/isPrime/isPrimeAnswers.txt",
                "isCompleted": false,
                "isSuccess": false
            },
            {
              "id": 8,
              "title": "Найдите числа, которые делятся на заданное число",
              "body": "Напишите функцию divisibleBy, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент — это массив чисел, а второй - делитель",
              "data": "https://qwertycamedy.ru/sites/it-quiz/divisibleBy/divisibleBy.txt",
              "answer":
                "https://qwertycamedy.ru/sites/it-quiz/divisibleBy/divisibleByAnswers.txt",
                "isCompleted": false,
                "isSuccess": false
            },
            {
              "id": 9,
              "title": "В два раза старше",
              "body": "Ваша функция принимает два аргумента: • текущий возраст отца (лет) • текущий возраст сына (лет) Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).",
              "data": "https://qwertycamedy.ru/sites/it-quiz/twiceAsOld/twiceAsOld.txt",
              "answer":
                "https://qwertycamedy.ru/sites/it-quiz/twiceAsOld/twiceAsOldAnswers.txt",
                "isCompleted": false,
                "isSuccess": false
            },
            {
              "id": 10,
              "title": "Посчитать нечетные числа ниже n",
              "body": "Если задано число n, вернуть количество положительных нечетных чисел меньше n",
              "data": "https://qwertycamedy.ru/sites/it-quiz/oddCount/oddCount.txt",
              "answer":
                "https://qwertycamedy.ru/sites/it-quiz/oddCount/oddCountAnswers.txt",
                "isCompleted": false,
                "isSuccess": false
            }
          ],
        });
      }
    }
  };

  return (
    <MyModal>
      <TextField
        value={nickname}
        onChange={handleNickname}
        label="Уникальный ник"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={handlePassword}
        label="Пароль"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Button variant="contained" onClick={onSignIn}>
        Вперед!
      </Button>
    </MyModal>
  );
};

export default AuthModal;
