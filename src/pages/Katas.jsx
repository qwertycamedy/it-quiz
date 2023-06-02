import React from "react";
import MyPage from "../components/_UI/MyPage";
import KataBlock from "../components/KataBlock";

const Katas = ({filteredUsers}) => {
  return (
    <MyPage classNames={"pt-[90px]"}>
      {filteredUsers.katas.map(kata => (
        !kata.isCompleted &&
        <KataBlock kata={kata} key={kata.id} />
      ))}
    </MyPage>
  );
};

export default Katas;
