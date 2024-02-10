import { configureStore } from "@reduxjs/toolkit";
import cntReducer from "./Reducers";


const store = configureStore({
  reducer: {
    cntData: cntReducer
  }
});

export default store;