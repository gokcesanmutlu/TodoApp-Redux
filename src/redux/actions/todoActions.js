import { ActionTypes } from "../actionTypes/todoTypes";

// action oluşturan bir fonk. oluşturma.

export const addTodo = (payload) => ({
    type: ActionTypes.ADD_TODO,
    payload,
});
export const editTodo = (payload) => ({
    type: ActionTypes.EDIT_TODO,
    payload,
});
export const deleteTodo = (payload) => ({
    type: ActionTypes.SET_TODOS,
    payload,
});
export const setTodos = (payload) => ({
    type: ActionTypes.TODO_DELETE,
    payload,
});