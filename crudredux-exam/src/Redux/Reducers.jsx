const initialState = {
      userItems: [],
}

const Reducers = (state = initialState,action) =>{
       switch(action.type){
            case "AddData" : {
                return {
                    ...state, userItems : [...state.userItems,action.payload]
                }
            }
            default : 
              return state
       }
       
}

export default Reducers;