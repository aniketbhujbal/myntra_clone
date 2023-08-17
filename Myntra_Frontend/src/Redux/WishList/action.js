import * as types from "./actionType"

  export const addToWishList = (productId) => {
    console.log(productId,":insode reducer")
    return {
      type: types.ADD_To_WishList_SUCCESS,
      payload: productId,
    };
  };












  
//  const fetchuser=async()=>{
//     const resp=await labourService.getAllLabour();
//     const rowsWithId = resp.data.map((row:any, index: number) => ({
//       ...row,
      
//       id:`NBP${index +1}`, // Assuming the index + 1 can be used as a unique identifier

//     }));
//     console.log(rowsWithId)
//     setRows(rowsWithId);
//   }