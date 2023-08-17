
import * as types from "./actionType"

const initialState={
    AllProducts:[],
    isLoading:false,
    isError:false
}

const reducer = (state=initialState,action) => {
    const {type,payload}=action
    switch(type){
        case types.GET_ADDRESS_REQUEST:{
            return {...state,isLoading:true}
        }
        case types.GET_ADDRESS_SUCCESS:{
            return {...state,isLoading:false,AllProducts:payload}
        }
        case types.GET_ADDRESS_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        default:return state
    }
  
}

export default reducer