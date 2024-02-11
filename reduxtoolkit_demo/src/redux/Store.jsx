// import { configureStore } from "@reduxjs/toolkit";
// import cntReducer from "./Reducers";


// const store = configureStore({
//   reducer: {
//     cntData: cntReducer
//   }
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from './Reducers';


const store = configureStore({
  reducer: {
    user:useReducer
  },
});

export default store;