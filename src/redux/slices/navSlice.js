import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '0',
        to: '/',
        body: 'Главная',
    },
    {
        id: '1',
        to: 'tests',
        body: 'Тесты',
    },
    {
        id: '2',
        to: 'kata',
        body: 'Задача',
    },
]

export const navSlice = createSlice({
    name: 'nav',
    initialState,
})

export default navSlice.reducer;