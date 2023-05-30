import React from "react";
import MyPage from "../components/_UI/MyPage";
import MySection from "../components/_UI/MySection";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const Katas = () => {
  return (
    <MyPage classNames={"pt-[90px]"}>
      <MySection>
        <p className="font-bold text-lg">Простейшие арифметические операции</p>
        <p className="text-clip">
          Написать функцию arithmetic, принимающую 3 аргумента: первые 2 -
          числа, третий - операция, которая должна быть произведена над ними.
          Если третий аргумент +, сложить их; если —, то вычесть; * — умножить;
          / — разделить (первое на второе). В остальных случаях вернуть строку
          "Неизвестная операция".
        </p>
        <Link
          className="flex items-center gap-4 text-blue-300 hover:text-blue-400 duration-200 ease-linear transition-colors"
          to="/task"
        >
          <span>Перейти к задаче</span>
          <BsArrowUpRight />
        </Link>
      </MySection>
    </MyPage>
  );
};

export default Katas;
