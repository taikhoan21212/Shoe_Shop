import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },
  reducers: {
    showCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = removeItem;
    },
  },
});


export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;