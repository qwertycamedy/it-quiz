import React, { useState } from "react";
import MySection from "./_UI/MySection";
import { Button, Stack, TextField } from "@mui/material";
import { GrClose, GrSave } from "react-icons/gr";

const Title = () => {
  const [newTitle, setNewTitle] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleTitle = e => {
    setNewTitle(e.target.value);
  };

  const saveTitle = () => {
    setIsSaved(true);
  };

  const removeTitle = () => {
    setIsSaved(false);
    setNewTitle("");
  };
  return (
    <div className="flex items-center justify-between gap-6">
      {isSaved ? (
        <div className="relative flex items-center gap-4 w-full">
          <div className="font-bold text-xl">1</div>
          <span className="font-bold text-xl">{newTitle}</span>
          <button
            onClick={removeTitle}
            className="absolute pointer z-10 right-[15px] top-1/2 -translate-y-1/2 hover:opacity-50"
          >
            <GrClose />
          </button>
        </div>
      ) : (
        <div className="relative flex items-center gap-4 w-full">
          <div className="font-bold">1</div>
          <TextField
            id="outlined-basic"
            label="Заголовок вопроса"
            variant="outlined"
            className="w-full"
            value={newTitle}
            onChange={handleTitle}
          />
          <button
            onClick={saveTitle}
            className="absolute pointer z-10 right-[30px] top-1/2 -translate-y-1/2 hover:opacity-50"
          >
            <GrSave />
          </button>
        </div>
      )}
    </div>
  );
};

const NewAnswer = ({ans, id, answers}) => {
  const [newAnswer, setNewAnswer] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleAnswer = e => {
    setNewAnswer(e.target.value);
  };

  const saveAnswer = () => {
    setIsSaved(true);
  };

  const removeAnswer = () => {
    setIsSaved(false);
    setNewAnswer("");
  };
  return (
    <div className="flex items-center gap-2 relative">
      {isSaved ? (
        <>
          <span className="font-bold">{id}</span>
          <span>{newAnswer}</span>
          <button
            onClick={removeAnswer}
            className="absolute pointer z-10 right-[15px] top-1/2 -translate-y-1/2 hover:opacity-50"
          >
            <GrClose />
          </button>
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            label="Ответ"
            variant="outlined"
            value={newAnswer}
            onChange={handleAnswer}
            className="w-full"
          />
          <button
            onClick={saveAnswer}
            className="absolute pointer z-10 right-[30px] top-1/2 -translate-y-1/2 hover:opacity-50"
          >
            <GrSave />
          </button>
        </>
      )}
    </div>
  );
};

const NewQuestion = () => {
  const [answers, setAnswers] = useState([
    {
      id: 0,
    },
  ]);

  const addAnswer = () => {
    setAnswers(prev => [...prev, { id: Date.now() }]);
  };
  const saveQues = () => {};

  return (
    <MySection classNames={"w-full"}>
      <div>Варианты ответов:</div>
      <Title />
      {answers.map((ans, index) => (
        <NewAnswer ans={ans} answers={answers} id={index + 1} key={index} />
      ))}
      <div className="flex relative w-full"></div>
      <Stack direction={"row"} spacing={2}>
        <Button onClick={addAnswer} variant="outlined">
          Добавить ответ
        </Button>
        <Button onClick={saveQues} variant="contained">
          Сохранить вопрос
        </Button>
      </Stack>
    </MySection>
  );
};

export default NewQuestion;
