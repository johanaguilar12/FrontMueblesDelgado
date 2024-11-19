import { createSlice } from '@reduxjs/toolkit';

export const driversSlice = createSlice({
    name: 'drivers',
    initialState: {
        drivers: [],
    },
    reducers: {
        onSetDrivers: (state, { payload } ) => {
            state.drivers = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetDrivers } = driversSlice.actions;