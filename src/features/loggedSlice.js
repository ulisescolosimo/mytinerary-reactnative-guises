import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name: "logged",
    initialState: {
        loggedState: false,
    },
    reducers: {
        loggedReverse: (state) => {
            state.loggedState = !state.loggedState;
        },
        loggedTrue: (state) => {
            state.loggedState = true;
        }
    }
})

export const { loggedReverse, loggedTrue } = loggedSlice.actions

export default loggedSlice.reducer