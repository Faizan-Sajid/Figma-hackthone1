"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartslice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
