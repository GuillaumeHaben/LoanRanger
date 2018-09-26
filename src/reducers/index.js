import { 
  ADD_USER, 
  DELETE_USERS,
  ADD_LAPTOP, 
  DELETE_LAPTOPS,
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

    case DELETE_USERS:
      const selectedUsers = action.payload;
      return { ...state,
        users: state.users.filter(user => !selectedUsers.includes(user.id))
      }

    /***** LAPTOP *****/
    case ADD_LAPTOP:
      return { ...state, 
        laptops: [...state.laptops, 
            action.payload] }

    case DELETE_LAPTOPS:
      const selectedLaptops = action.payload;
      return { ...state,
        laptops: state.laptops.filter(laptop => !selectedLaptops.includes(laptop.id))
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