import { 
    ADD_USER, 
    DELETE_USER,
    ADD_LAPTOP, 
    DELETE_LAPTOP,
    ADD_LOAN,
    DELETE_ALL_LOANS,
} from "../constants/action-types";

export const addUser = user => ({ type: ADD_USER, payload: user });
export const deleteUser = selected => ({ type: DELETE_USER, payload: selected });

export const addLaptop = laptop => ({ type: ADD_LAPTOP, payload: laptop });
export const deleteLaptop = id => ({ type: DELETE_LAPTOP, payload: id });

export const addLoan = loan => ({ type: ADD_LOAN, payload: loan });
export const deleteAllLoans = () => ({ type: DELETE_ALL_LOANS });