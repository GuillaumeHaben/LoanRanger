import { 
    ADD_USER, 
    DELETE_USER,
    ADD_LAPTOP, 
    DELETE_LAPTOP,
} from "../constants/action-types";

export const addUser = user => ({ type: ADD_USER, payload: user });
export const deleteUser = id => ({ type: DELETE_USER, payload: id });

export const addLaptop = laptop => ({ type: ADD_LAPTOP, payload: laptop });
export const deleteLaptop = id => ({ type: DELETE_LAPTOP, payload: id });