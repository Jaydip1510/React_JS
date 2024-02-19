const initialState = {
    empData: [],
}

const Reducers = (state=initialState,action) => {
        switch(action.type) {
               case 'Add_Item':{
                   return {
                      ...state,empData : [...state.empData,action.payload]
                   }
               }
               case "Remove_Item" : {
                return {
                    ...state, empData : state.empData.filter(
                        (i,index) => index !== action.payload
                    )
                }
            }
            case "Update_Item" : {
                 return {
                    ...state, empData: state.empData.map((i,index)=>
                        index === action.payload.id ? action.payload : i
                    ),
                 };
            }
               default : {
                  return state
               }
        }  
}

export default Reducers