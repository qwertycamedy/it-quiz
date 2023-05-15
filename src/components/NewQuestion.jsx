import React from "react";
import MySection from "./_UI/MySection";
import { Button, Stack, TextField } from "@mui/material";
import { GrClose } from "react-icons/gr";

const NewQuestion = () => {
  return (
    <MySection classNames={"w-full"}>
      <div className="flex items-center justify-between">
        <div className="font-bold">1</div>
        <TextField
          id="outlined-basic"
          label="Заголовок вопроса"
          variant="outlined"
        />
        <Button>Удалить</Button>
      </div>
      <div>Варианты ответов:</div>
      <div className="flex items-center gap-2">
        <span className="font-bold">1)</span>
        <span>Ответ ответный с ответом ответа у которого есть ответ</span>
      </div>
      <div className="flex relative w-full">
        <TextField
          id="outlined-basic"
          label="Ответ"
          variant="outlined"
          className="w-full"
        />
        <button className="absolute pointer z-10 right-[15px] top-1/2 -translate-y-1/2 hover:opacity-50">
          <GrClose />
        </button>
      </div>
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined">Добавить ответ</Button>
        <Button variant="contained">Сохранить</Button>
      </Stack>
    </MySection>
  );
};

export default NewQuestion;
