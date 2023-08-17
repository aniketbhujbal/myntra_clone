import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import ProductsReducer from './clothing/Reducer';
import cartReducer from '../ReduxToolkit/Cart/cartSlice';
import WishListReducer from './WishList/Reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  Cart:cartReducer,
  WishList:WishListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
 