import React from "react";
import MyPage from "../components/_UI/MyPage";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  return (
    <MyPage>
      <div className="inner my-16">
        <div className="flex flex-col gap-8 rounded-xl shadow-md bg-white p-8">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" className="mb-4">
              Текст вопроса удивительно поставленного с хорошей интонацией?
            </FormLabel>
            <RadioGroup defaultValue="a1" name="question">
              <FormControlLabel
                value="a1"
                control={<Radio />}
                label="Answer 1"
                className="hover:bg-blue-100 transition-colors duration-200 ease-linear rounded-md mr-0 pr-4"
              />
              <FormControlLabel
                value="a2"
                control={<Radio />}
                label="Answer 2"
                className="hover:bg-blue-100 transition-colors duration-200 ease-linear rounded-md mr-0 pr-4"
              />
              <FormControlLabel
                value="a3"
                control={<Radio />}
                label="Answer 3"
                className="hover:bg-blue-100 transition-colors duration-200 ease-linear rounded-md mr-0 pr-4"
              />
              <FormControlLabel
                value="a4"
                control={<Radio />}
                label="Answer 4"
                className="hover:bg-blue-100 transition-colors duration-200 ease-linear rounded-md mr-0 pr-4"
              />
              <FormControlLabel
                value="a5"
                control={<Radio />}
                label="Answer 5"
                className="hover:bg-blue-100 transition-colors duration-200 ease-linear rounded-md mr-0 pr-4"
              />
            </RadioGroup>
          </FormControl>
          <div className="flex items-center justify-between">
            <Button variant="outlined" type="submit" onClick={navigate(-1)}>
              Prev
            </Button>
            <Button variant="contained" color="success" type="submit">
              Next
            </Button>
          </div>
        </div>
      </div>
    </MyPage>
  );
}

export default Test;
