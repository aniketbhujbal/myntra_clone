
import * as types from "./actionType"

const initialState={
    WishListItems:[]
}

const reducer = (state=initialState,action) => {
    const {type,payload}=action
    switch(type){
        case types.ADD_To_WishList_SUCCESS:{
            return {
                ...state,
                WishListItems: [...state.WishListItems, payload],
              };
        }
        default:return state
    }
}

export default reducer