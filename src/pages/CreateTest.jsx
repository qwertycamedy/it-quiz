import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import MyPage from "../components/_UI/MyPage";
import MySection from "../components/_UI/MySection";
import { GrClose } from "react-icons/gr";
import H1 from "../components/_UI/H1";
import NewQuestion from "../components/NewQuestion";

function CreateTest() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState('');
  const [lang, setLang] = useState("");

  const handleName = event => {
    setName(event.target.value);
  };

  const saveName = () => {
    setSavedName(name);
  }

  const clearName = () => {
    setName('');
    setSavedName('');
  }

  const handleLang = event => {
    setLang(event.target.value);
  };

  return (
    <MyPage classNames={"pt-[100px]"}>
      <div className="flex gap-4"></div>
      <div className="flex items-center justify-between gap-4 mb-[35px]">
        {!savedName ? (
          <>
            <TextField
              label="Название теста"
              variant="outlined"
              value={name}
              onChange={handleName}
              className="w-full"
            />
            <Button variant="contained" onClick={saveName}>Сохранить</Button>
          </>
        ) : (
          <>
            <H1 classNames={"text-left"}>{savedName}</H1>
            <button className="pointer hover:opacity-50" onClick={clearName}>
              <GrClose />
            </button>
          </>
        )}
      </div>
      <div className="flex items-center justify-between gap-4 mb-[35px]">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Язык программирования
          </InputLabel>
          <Select
            value={lang}
            label="Язык программирования"
            onChange={handleLang}
          >
            <MenuItem value={10}>Питон</MenuItem>
            <MenuItem value={20}>Жава</MenuItem>
            <MenuItem value={30}>ЖовоСкрепт</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="min-h-full flex flex-col gap-8 items-center">
        <NewQuestion />
        <Stack direction={"row"} spacing={2}>
          <Button variant="outlined">Добавить вопрос</Button>
          <Button variant="contained">Сохранить</Button>
        </Stack>
      </div>
    </MyPage>
  );
}

export default CreateTest;
