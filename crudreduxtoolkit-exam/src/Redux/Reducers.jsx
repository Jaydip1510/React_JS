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
        deleteItem:(state, action) => {
             state.empData = state.empData.filter((item,index)=> index !== action.payload);
        }
    },
});

export const { addData,deleteItem } = empSlice.actions;
export default empSlice.reducer;