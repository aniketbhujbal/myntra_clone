
import * as types from "./actionType"

const initialState={
    CartItems:[]
}

const reducer = (state=initialState,action) => {
    const {type,payload}=action
    switch(type){
        case types.ADD_To_Cart_SUCCESS:{
            return {
                ...state,
                CartItems: [...state.CartItems, payload],
              };
        }
        case types.DELETE_CART_ITEM :{
            console.log("paylod",payload)
            const updatedCartItems = state.CartItems.filter(item => item !== action.payload);
            console.log("updatedCartItems",updatedCartItems)
            return {
              ...state,
              CartItems: updatedCartItems,
            };
        }
            
        default:return state
    }
}

export default reducer