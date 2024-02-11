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
    
  },
});

export const { addItem,deleteItem } = userSlice.actions;
export default userSlice.reducer;