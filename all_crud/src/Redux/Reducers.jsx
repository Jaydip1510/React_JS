const initialState = {
      empItems:[],
}

const Reducers = (state = initialState,action) => {
       switch(action.type) {
            case "AddData": {
                 return {
                    ...state,empItems : [...state.empItems,action.payload]
                 }
            }
       }
}

export default Reducers;