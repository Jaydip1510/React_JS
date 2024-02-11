import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.userInfo.push(action.payload);
    },
    deleteItem: (state, action) => {
            state.userInfo = state.userInfo.filter((item, index) => index !== action.payload);
      },
    updateItem: (state, action) => {
          state.userInfo = state.userInfo.map((i,index) =>
            index === action.payload.id ? action.payload : i
          ) 
    }
    
  },
});

export const { addItem,deleteItem,updateItem } = userSlice.actions;
export default userSlice.reducer;