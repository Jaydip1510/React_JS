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
            case "DeleteData" : {
                return {
                    ...state, userItems : state.userItems.filter(
                        (i,index) => index !== action.payload
                    )
                }
            }
            default : 
              return state
       }
       
}

export default Reducers;