import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.includes(itemId)) {
        state.push(itemId);
      }
    },
    removeCartProduct: (state, action) => {
      const itemId = action.payload;
      return state.filter(id => id !== itemId);
    },
  },
});

export const { addToCart, removeCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
