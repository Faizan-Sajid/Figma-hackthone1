interface CartItem {
  _id: string;
  title: string;
  productImageUrl: string;
  price: number;
  discountPercentage: number;
  isNew: boolean;
  quantity: number;
}

// Define the state type as an array of CartItems
type CartState = CartItem[];

import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  // Explicitly type the state as CartState
  initialState: [] as CartState, // Initial state is an empty array of CartItems
  reducers: {
    // The 'add' action expects the payload to be of type CartItem
    add(state, action: { payload: CartItem }) {
      state.push(action.payload); // Add the item to the state
    },
    // The 'remove' action expects the payload to be a string (the item's id)
    remove(state, action: { payload: string }) {
      return state.filter((item) => item._id !== action.payload); // Filter out the item by id
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
