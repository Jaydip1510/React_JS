import { AddData, DeleteData, UpdateData } from "./Action";

const initialState = {
    Data: []
}

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addData": {
            return { ...state, Data: [...state.Data, action.payload] };
        };
        case 'deleteData':
            const DeleteData = state.Data.filter((e) =>{
                 return e.id != action.payload;
            });
            return{...state,Data:DeleteData}
        default: return state
    }
}

export default DataReducer