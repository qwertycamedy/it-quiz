import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  lang: "",
  questions: [],
  newQuestion: {
    answers: [
        '',
    ]
  },
};

const newTestSlice = createSlice({
  name: "newTest",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
        state.questions = [...state.questions, action.payload];
    },
    removeQuestion: (state, action) => {
        state.questions.filter(item => item.id !== action.payload.id);
    },
    addAnswer: (state, action) => {
        state.newQuestion.answers = [...state.newQuestion.answers, action.payload]
    },
    removeAnswer: (state, action) => {
        state.newQuestion.answers.filter(item => item.includes(action.payload))
    },
  },
});

export const { addQuestion, removeQuestion, addAnswer, removeAnswer } =
  newTestSlice.actions();

export default newTestSlice.reducer;
