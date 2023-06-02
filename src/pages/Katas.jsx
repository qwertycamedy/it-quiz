import React from "react";
import MyPage from "../components/_UI/MyPage";
import KataBlock from "../components/KataBlock";
import { useSelector } from "react-redux";

const Katas = () => {
  const { katas } = useSelector(state => state.katas);
  return (
    <MyPage classNames={"pt-[90px]"}>
      {katas.map(kata => (
        !kata.isCompleted &&
        <KataBlock kata={kata} key={kata.id} />
      ))}
    </MyPage>
  );
};

export default Katas;
