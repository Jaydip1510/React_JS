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
        },
        updateItem : (state, action) => {
               state.empData = state.empData.map((i,index)=>
                 index === action.payload.id ? action.payload : i
               )
        },
             
    },
})

export const { addData,deleteItem,updateItem } = empSlice.actions;
export default empSlice.reducer;