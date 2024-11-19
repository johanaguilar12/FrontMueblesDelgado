import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
    },
    reducers: {
        onSetOrders: (state, { payload } ) => {
            state.orders = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetOrders } = ordersSlice.actions;