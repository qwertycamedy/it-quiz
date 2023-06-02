import React from "react";
import MySection from "./_UI/MySection";
import H1 from "./_UI/H1";

function CompletedKataBlock({ kata }) {
  return (
    <MySection>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <H1 classNames={"mb-2"}>{kata.title}</H1>
          <p>
            Пройдено:{" "}
            <span className="font-bold">
              {kata.isSuccess ? "Верно" : "Неверно"}
            </span>
          </p>
        </div>
        <p className="text-clip">{kata.body}</p>
      </div>
    </MySection>
  );
}

export default CompletedKataBlock;
