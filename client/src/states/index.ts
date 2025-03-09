import { createSlice } from "@reduxjs/toolkit";


export const initialState = {};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {},
});

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export const {} = globalSlice.actions;

export default globalSlice.reducer;