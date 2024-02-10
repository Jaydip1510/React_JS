import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      userInfo : [],
};

export const cntReducers = createSlice({
      name: "cntData",
      initialState,
      reducers: {
            Increment: (state) => {
                  state.cnt = state.cnt + 1;
            },
            Decrement: (state) => {
                  state.cnt = state.cnt - 1;
            },
            addItem : (state) => {
                  return{
                   ...state, userInfo: [...state.userInfo],
                  }
                  
            }
            
      }
});

export const { Increment, Decrement } = cntReducers.actions;
export default cntReducers.reducer;