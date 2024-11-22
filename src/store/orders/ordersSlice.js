import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        packingListOrderID: [],
    },
    reducers: {
        onSetOrders: (state, { payload } ) => {
            state.orders = payload;
        },
        onSetPackingListOrderID: (state, { payload } ) => {
            state.packingListOrderID = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetOrders, onSetPackingListOrderID } = ordersSlice.actions;