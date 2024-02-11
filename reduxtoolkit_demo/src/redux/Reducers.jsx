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
    // other reducers...
  },
});

export const { addItem } = userSlice.actions;
export default userSlice.reducer;