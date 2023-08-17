import * as types from "./actionType"
import axios from "axios"

  export const addToCart = (productId) => {
    console.log(productId,":insode reducer")
    return {
      type: types.ADD_To_Cart_SUCCESS,
      payload: productId,
    };
  };

  export const removeCartProduct = (itemId) => {
    return {
      type: types.DELETE_CART_ITEM,
      payload: itemId,
  };
};






