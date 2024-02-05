
const initialState = {
      empData : [],
}

const Reducer = (state = initialState, action) =>{
       switch(action.type){
           case "Add_Item" : {
              return {
                 ...state, empData : [...state.empData, action.payload],
              }
           }
           case "Remove_Item" : {
              return {
                  ...state, empData : state.empData.filter(
                     (i,index) => index !== action.payload
                  ),
              }
           }
           default:
            return state; 
       }
}

export default Reducer;