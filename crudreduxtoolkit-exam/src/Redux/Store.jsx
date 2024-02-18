import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./Reducers";



const Store = configureStore({
    reducer:{
        emp:useReducer
    },
})

export default Store;
