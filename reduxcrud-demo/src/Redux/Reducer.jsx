const initialState = {
    userData: [],
};

const Reducer = (state=initialState,action) => {
       switch (action.type) {
          case "Add_User" : {
               return {
                ...state,userData:[...state.userData,action.payload],
               }
            }

       }

}

export default Reducer