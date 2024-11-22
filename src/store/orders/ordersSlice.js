import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        packingListOrderID: [],
        routes: [],
    },
    reducers: {
        onSetOrders: (state, { payload } ) => {
            state.orders = payload;
        },
        onSetPackingListOrderID: (state, { payload } ) => {
            state.packingListOrderID = payload;
        },
        onSetRoutes: (state, { payload } ) => {
            state.routes = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { onSetOrders, onSetPackingListOrderID, onSetRoutes } = ordersSlice.actions;