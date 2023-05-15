import React from "react";
import MyPage from "../components/_UI/MyPage";
import TestsBlock from "../components/TestsBlock";

function Tests() {
  return (
    <MyPage classNames={"mt-24"}>
      <div className="flex flex-col gap-8">
        <TestsBlock />
        <TestsBlock />
        <TestsBlock />
        <TestsBlock />
      </div>
    </MyPage>
  );
}

export default Tests;
