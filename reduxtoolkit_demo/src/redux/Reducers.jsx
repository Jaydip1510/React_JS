import { createSlice } from "@reduxjs/toolkit";


const intialstate = {
      cnt : 0
}

export const cntReducers = createSlice({
      name : "cntData",
      intialstate,
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