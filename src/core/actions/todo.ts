import { ITodo } from './../interfaces/todo';

export enum TodoActionTypes {
  FETCH_TODOLIST_LOADING = '[Todo] FETCH_TODOLIST_LOADING',
  FETCH_TODOLIST_SUCCESS = '[Todo] FETCH_TODOLIST_SUCCESS',
  FETCH_TODOLIST_FAILED = '[Todo] FETCH_TODOLIST_FAILEd',
  ADD_TODO_LOADING = '[Todo] ADD_TODO_LOADING',
  ADD_TODO_SUCCESS = '[Todo] ADD_TODO_SUCCESS',
  ADD_TODO_FAILED = '[Todo] ADD_TODO_FAILED',
  REMOVE_TODO_LOADING = '[Todo] REMOVE_TODO_LOADING',
  REMOVE_TODO_SUCCESS = '[Todo] REMOVE_TODO_SUCCESS',
  REMOVE_TODO_FAILED = '[Todo] REMOVE_TODO_FAILED',
  TOGGLE_TODO_LOADING = '[Todo] TOGGLE_TODO_LOADING',
  TOGGLE_TODO_SUCCESS = '[Todo] TOGGLE_TODO_SUCCESS',
  TOGGLE_TODO_FAILED = '[Todo] TOGGLE_TODO_FAILED',
}

export const fetchTodoListLoading = () => {
  return { type: TodoActionTypes.FETCH_TODOLIST_LOADING };
};

export const fetchTodoListSuccess = (todoList: ITodo[]) => {
  return {
    type: TodoActionTypes.FETCH_TODOLIST_SUCCESS,
    payload: { todoList },
  };
};

export const fetchTodoListFailed = (error: string) => {
  return {
    type: TodoActionTypes.FETCH_TODOLIST_FAILED,
    payload: { error },
  };
};

export const addTodoLoading = () => {
  return { type: TodoActionTypes.ADD_TODO_LOADING };
};

export const addTodoSuccess = (todo: ITodo) => {
  return { type: TodoActionTypes.ADD_TODO_SUCCESS, payload: { todo } };
};

export const addTodoFailed = (error: string) => {
  return { type: TodoActionTypes.ADD_TODO_FAILED, payload: { error } };
};

export const removeTodoLoading = () => {
  return { type: TodoActionTypes.REMOVE_TODO_LOADING };
};

export const removeTodoSuccess = (todo: ITodo) => {
  return { type: TodoActionTypes.REMOVE_TODO_SUCCESS, payload: { todo } };
};

export const removeTodoFailed = (error: string) => {
  return { type: TodoActionTypes.REMOVE_TODO_FAILED, payload: { error } };
};

export const toggleTodoLoading = () => {
  return { type: TodoActionTypes.TOGGLE_TODO_LOADING };
};

export const toggleTodoSuccess = (todo: ITodo) => {
  return { type: TodoActionTypes.TOGGLE_TODO_SUCCESS, payload: { todo } };
};

export const toggleTodoFailed = (error: string) => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_FAILED,
    payload: { error },
  };
};
