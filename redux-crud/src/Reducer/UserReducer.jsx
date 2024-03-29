import { ADD_USER, DELETE_USER } from "../Action/Action";

const initialState = {
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: state.users.length + 1 }],
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
};

export default UserReducer;