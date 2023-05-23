import React from "react";
import MyPage from "../components/_UI/MyPage";
import H1 from "../components/_UI/H1";
import MySection from "../components/_UI/MySection";

const Kata = () => {
  return (
    <MyPage>
      <div className="pt-[90px] grid grid-cols-2 gap-4">
        <div>
          <H1 classNames={"mb-[35px]"}>Условие задачи:</H1>
          <h3 className="font-semibold text-lg mb-3">Самое короткое слово</h3>
          <p>
            Простая функция, дающая строку слов, возвращает длину самого
            короткого слова (слов). Строка никогда не будет пустой, и вам не
            нужно учитывать различные типы данных.
          </p>
        </div>
        <div>
          <H1 classNames={"mb-[35px]"}>Код задачи:</H1>
          <MySection>
            <textarea
              className="resize-none h-[300px]"
              placeholder="Код для решения вашей задачи"
            ></textarea>
          </MySection>
        </div>
      </div>
    </MyPage>
  );
};

export default Kata;
