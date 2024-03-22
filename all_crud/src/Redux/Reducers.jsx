const initialState = {
     empItems: [],
 }
 
 const Reducers = (state = initialState, action) => {
     switch(action.type) {
         case "AddData": {
             return {
                 ...state,
                 empItems: [...state.empItems, action.payload]
             }
         }
         case "RemoveData": {
            return {
               ...state,empItems : state.empItems.filter(
                    (i,index) => index !== action.payload
               )
            }
         }
         default:
             return state;
     }
 }
 
 export default Reducers;