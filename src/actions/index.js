import { ADD_USER, DELETE_USER } from "../constants/action-types";

export const addUser = user => ({ type: ADD_USER, payload: user });
export const deleteUser = id => ({ type: DELETE_USER, payload: id });