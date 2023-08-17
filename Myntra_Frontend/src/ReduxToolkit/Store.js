// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ProductsReducer from '../Redux/clothing/Reducer';
import cartReducer from './Cart/cartSlice';
import WishListReducer from '../Redux/WishList/Reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    Cart: cartReducer,
    WishList: WishListReducer
  },
  middleware: getDefaultMiddleware().concat(logger),
});

export default store;
