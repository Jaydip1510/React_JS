//  import {add,sub,multiply,divide} from '../Action/Action'
// const dt = {
//     cnt :0
// }

// const Reducer = (state=dt, action) =>{
//     if(action.type == 'Increment'){
//         return {...state, cnt:state.cnt +1};
//     }

//     if(action.type == 'Decrement'){
//         return {...state, cnt:state.cnt -1};   
//     }
//     return state;
// }

// export default Reducer;

import { INCREMENT, DECREMENT } from "../Action/Action";
const initialState = {
  count: 0,
};

const Reducer = (state = initialState, action) => {
  if (action.type == INCREMENT) {
    return { ...state, count: state.count + 1};
  }
  if (action.type == DECREMENT) {
    if(state.count == 0) {
       return{...state,count:0}
    }else{
      return {...state, count: state.count - 1};
    } 
  };
  return state;

};

export default Reducer;

