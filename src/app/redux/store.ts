"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cartslice";
import wishlistReducer from '../redux/features/wishlistSlice'



const Store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, 

     

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
