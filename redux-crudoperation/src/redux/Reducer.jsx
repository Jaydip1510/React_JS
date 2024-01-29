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
            const updatedData = state.Data.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                Data: updatedData,
            };
        default: return state
    }
}

export default DataReducer