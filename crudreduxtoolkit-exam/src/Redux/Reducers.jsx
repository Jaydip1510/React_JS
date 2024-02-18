import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empData: [],
};

const empSlice = createSlice({
    name: 'emp',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.empData.push(action.payload);
        },
    },
});

export const { addData } = empSlice.actions;
export default empSlice.reducer;