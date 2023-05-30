import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '0',
        to: '/',
        body: 'Главная',
    },
    {
        id: '1',
        to: 'tasks',
        body: 'Задачи',
    },
    {
        id: '2',
        to: 'task',
        body: 'Задача',
    },
]

export const navSlice = createSlice({
    name: 'nav',
    initialState,
})

export default navSlice.reducer;