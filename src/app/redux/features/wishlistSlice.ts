// Define the structure for CartItem
interface CartItem {
    _id: string;
    title: string;
    productImageUrl: string;
    price: number;
    discountPercentage: number;
    isNew: boolean;
    quantity: number;
  }
  
  // Define the state type as an array of CartItems (Wishlist)
  type WishlistState = CartItem[];
  
  // Import necessary functions from Redux Toolkit
  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  
  // Create the wishlist slice
  export const wishlistSlice = createSlice({
    name: "wishlist",
    // Initial state is an empty array of CartItems
    initialState: [] as WishlistState, 
    reducers: {
      // Action to add a product to the wishlist
      add(state, action: PayloadAction<CartItem>) {
        // Check if the product already exists in the wishlist
        const existingProduct = state.find(item => item._id === action.payload._id);
        if (!existingProduct) {
          state.push(action.payload); // Add the product if it's not already in the wishlist
        }
      },
      // Action to remove a product from the wishlist using its _id
      remove(state, action: PayloadAction<string>) {
        return state.filter(item => item._id !== action.payload); // Remove item by id
      },
    },
  });
  
  // Export the actions to be used in components or elsewhere
  export const { add, remove } = wishlistSlice.actions;
  
  // Export the reducer to be used in the store
  export default wishlistSlice.reducer;
  