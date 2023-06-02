import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    katas: [],
}

const katasSlice = createSlice({
    name: 'katas',
    initialState,
    reducers: {
        setKatas: (state, action) => {
            state.katas = action.payload;
        }
    }
})

export const {setKatas} = katasSlice.actions;

export default katasSlice.reducer;