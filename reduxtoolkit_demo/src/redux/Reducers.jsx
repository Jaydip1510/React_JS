import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      cnt : 0
}

export const cntReducers = createSlice({
      name : "cntData",
      initialState,
      reducers:{
           Increment:(state)=>{
              state.cnt = state.cnt + 1;
           },
           Decrement:(state) => {
              state.cnt = state.cnt - 1;
           }
      }
})
export const {Increment,Decrement} = cntReducers.actions;
export default cntReducers.reducer;