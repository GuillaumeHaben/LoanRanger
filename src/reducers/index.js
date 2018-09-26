import { 
  ADD_USER, 
  DELETE_USER,
  ADD_LAPTOP, 
  DELETE_LAPTOP,
  ADD_LOAN,
  DELETE_ALL_LOANS,
} from "../constants/action-types";

const initialState = {
  users: [],
  laptops: [],
  loans: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    /***** USER *****/
    case ADD_USER:
      return { ...state, 
        users: [...state.users, 
            action.payload] }

    case DELETE_USER:
      const selected = action.payload;
      return { ...state,
        users: state.users.filter(user => !selected.includes(user.id))
      }

    /***** LAPTOP *****/
    case ADD_LAPTOP:
      return { ...state, 
        laptops: [...state.laptops, 
            action.payload] }

    case DELETE_LAPTOP:
      const laptopId = action.payload;
      return { ...state,
        laptops: state.laptops.filter(laptop => laptop.id !== laptopId)
      }

    /***** LOAN *****/
    case ADD_LOAN:
      return { ...state, 
        loans: [...state.loans, 
            action.payload] }

    case DELETE_ALL_LOANS:
      return { ...state, 
        loans: [] }

    default:
      return state;
  }
};

export default rootReducer;