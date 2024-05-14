const initialState = {
    empItem : [],
}

const Reducers = (state = initialState,action) => {
      switch(action.type){
            case "AddData": {
                return {
                    ...state, empItem : [...state.empItem,action.payload]
                }
            }
            case "DeleteData": {
                return {
                    ...state, empItem : state.empItem.filter(
                        (i,index) => index !== action.payload
                    )
                }
                
            }
            default : 
                return state
      }
}
 
export default  Reducers;