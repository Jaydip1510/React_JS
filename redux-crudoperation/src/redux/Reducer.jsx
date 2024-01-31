import { AddData, DeleteData, UpdateData,EditData } from "./Action";

const initialState = {
    Data: [],
    edituser:{},
}

const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addData": {
            return { ...state, Data: [...state.Data, action.payload] };
        };
        case 'deleteData':{
            const DeleteData = state.Data.filter((e) =>{
                 return e.id != action.payload;
            });
            return{...state,Data:DeleteData}
        }
        case 'editData':{
            const EditData = state.Data.filter((e) =>{
                return e.id == action.payload;
           });
           return{...state,edituser:EditData[0]}; 
        }
        default: return state
    }
}

export default DataReducer