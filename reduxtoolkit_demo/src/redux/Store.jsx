import { configureStore } from "@reduxjs/toolkit";
import { cntReducers } from "./Reducers";

const store = configureStore({
     reducer:{
        cntData:cntReducers
     }
})

export default store;