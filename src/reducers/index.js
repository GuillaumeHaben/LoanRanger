import { 
  ADD_USER, 
  DELETE_USER,
  ADD_LAPTOP, 
  DELETE_LAPTOP,
} from "../constants/action-types";

const initialState = {
  users: [],
  laptops: []
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

    case ADD_LAPTOP:
      return { ...state, 
        laptops: [...state.laptops, 
            action.payload] }

    case DELETE_LAPTOP:
      const laptopId = action.payload;
      return { ...state,
        laptops: state.laptops.filter(laptop => laptop.id !== laptopId)
      }

    default:
      return state;
  }
};

export default rootReducer;