import { ADD_USER, DELETE_USER } from "../constants/action-types";

const initialState = {
  users: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_USER:
      return { ...state, 
        users: [...state.users, 
            action.payload] }

    case DELETE_USER:
      const userId = action.payload;
      return { ...state,
        users: state.users.filter(user => user.id !== userId)
      }
      
    default:
      return state;
  }
};

export default rootReducer;