import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Reducers'
const Store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default Store;