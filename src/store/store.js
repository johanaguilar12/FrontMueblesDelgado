import { configureStore } from "@reduxjs/toolkit";
import { authSlice, driversSlice, ordersSlice, trucksSlice } from "./";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        drivers: driversSlice.reducer,
        trucks: trucksSlice.reducer,
        orders: ordersSlice.reducer,
    },
});