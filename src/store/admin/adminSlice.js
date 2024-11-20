import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        status: "waiting",
    },
    reducers: {
        onStartingCommand: (state, {payload} ) => {
            state.status = "starting";
        },
        onFinishedCommand: (state, {payload} ) => {
            state.status = "finished";
        },
    }
});

// Action creators are generated for each case reducer function
export const { onStartingCommand, onFinishedCommand } = adminSlice.actions;    