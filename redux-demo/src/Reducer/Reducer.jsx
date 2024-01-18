 import {add,sub,multiply,divide} from '../Action/Action'
const dt = {
    cnt :0
}

const Reducer = (state=dt, action) =>{
    if(action.type == 'Increment'){
        return {...state, cnt:state.cnt +1};
    }

    if(action.type == 'Decrement'){
        return {...state, cnt:state.cnt -1};   
    }
    return state;
}

export default Reducer;

