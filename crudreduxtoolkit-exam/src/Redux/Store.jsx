import { configureStore } from "@reduxjs/toolkit";
import empReducer from './Reducers';
const Store = configureStore({
    reducer:{
        emp: empReducer
    },
})

export default Store;
