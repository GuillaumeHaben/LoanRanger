import { 
    ADD_USER, 
    DELETE_USERS,
    ADD_LAPTOP, 
    DELETE_LAPTOPS,
    ADD_LOAN,
    DELETE_ALL_LOANS,
} from "../constants/action-types";

export const addUser = user => ({ type: ADD_USER, payload: user });
export const deleteUsers = selectedUsers => ({ type: DELETE_USERS, payload: selectedUsers });

export const addLaptop = laptop => ({ type: ADD_LAPTOP, payload: laptop });
export const deleteLaptops = selectedLaptops => ({ type: DELETE_LAPTOPS, payload: selectedLaptops });

export const addLoan = loan => ({ type: ADD_LOAN, payload: loan });
export const deleteAllLoans = () => ({ type: DELETE_ALL_LOANS });