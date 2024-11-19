import { createSlice } from '@reduxjs/toolkit';

export const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        trucks: [],
    },
    reducers: {
        onSetTrucks: (state, { payload } ) => {
            state.trucks = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetTrucks } = trucksSlice.actions;