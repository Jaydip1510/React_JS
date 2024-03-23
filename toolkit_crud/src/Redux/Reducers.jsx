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
     },
})

export const { addItem } = userSlice.actions;
export default userSlice.reducer;