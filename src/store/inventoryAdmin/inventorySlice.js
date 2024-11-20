import { createSlice } from '@reduxjs/toolkit';

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: {
        packinglists: [],
    },
    reducers: {
        onSetPackingLists: (state, { payload } ) => {
            state.packinglists = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetPackingLists } = inventorySlice.actions;