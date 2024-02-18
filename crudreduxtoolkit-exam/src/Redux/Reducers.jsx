const intialState = {
    empData: []
};

const empSlice = createSlice({
     name:'emp',
     intialState,
     reducers:{
          addData:(state,action) => {
              state.empData.push(action.payload);
          }
     }
})

export const {addData} = empSlice.actions;
export default empSlice.reducer;