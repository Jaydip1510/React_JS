import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: [],
}

const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
           addItem: (state, action) => {
              state.userData.push(action.payload);
           },
           deleteItem:(state, action) => {
              state.userData = state.userData.filter((item, index) => index !== action.payload);
           },
           updateItem:(state, action) => {
               state.userData = state.userData.map((i,item)=>
                  item === action.payload.id ? action.payload : i 
               )
           }
     },
})

export const { addItem,deleteItem,updateItem } = userSlice.actions;
export default userSlice.reducer;