import { Action } from '../interfaces/action';
import { ITodo } from './../interfaces/todo';

export enum TodoActionTypes {
  FETCH_TODOLIST = '[Todo] FETCH_TODOLIST',
  FETCH_TODOLIST_SUCCESS = '[Todo] FETCH_TODOLIST_SUCCESS',
  FETCH_TODOLIST_FAILED = '[Todo] FETCH_TODOLIST_FAILEd',
  ADD_TODO = '[Todo] ADD_TODO',
  ADD_TODO_SUCCESS = '[Todo] ADD_TODO_SUCCESS',
  ADD_TODO_FAILED = '[Todo] ADD_TODO_FAILED',
  REMOVE_TODO = '[Todo] REMOVE_TODO',
  REMOVE_TODO_SUCCESS = '[Todo] REMOVE_TODO_SUCCESS',
  REMOVE_TODO_FAILED = '[Todo] REMOVE_TODO_FAILED',
  TOGGLE_TODO = '[Todo] TOGGLE_TODO',
  TOGGLE_TODO_SUCCESS = '[Todo] TOGGLE_TODO_SUCCESS',
  TOGGLE_TODO_FAILED = '[Todo] TOGGLE_TODO_FAILED',
}

export const fetchTodoList = (): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.FETCH_TODOLIST };
};

export const fetchTodoListSuccess = (
  todoList: ITodo[]
): Action<TodoActionTypes> => {
  return {
    type: TodoActionTypes.FETCH_TODOLIST_SUCCESS,
    payload: { todoList },
  };
};

export const fetchTodoListFailed = (error: string): Action<TodoActionTypes> => {
  return {
    type: TodoActionTypes.FETCH_TODOLIST_FAILED,
    payload: { error },
  };
};

export const addTodo = (todo: ITodo): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.ADD_TODO, payload: { todo } };
};

export const addTodoSuccess = (todo: ITodo): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.ADD_TODO_SUCCESS, payload: { todo } };
};

export const addTodoFailed = (error: string): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.ADD_TODO_FAILED, payload: { error } };
};

export const removeTodo = (todoId: string): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.REMOVE_TODO, payload: { todoId } };
};

export const removeTodoSuccess = (todoId: string): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.REMOVE_TODO_SUCCESS, payload: { todoId } };
};

export const removeTodoFailed = (error: string): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.REMOVE_TODO_FAILED, payload: { error } };
};

export const toggleTodo = (todoId: string): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.TOGGLE_TODO, payload: { todoId } };
};

export const toggleTodoSuccess = (todoId: string): Action<TodoActionTypes> => {
  return { type: TodoActionTypes.TOGGLE_TODO_SUCCESS, payload: { todoId } };
};

export const toggleTodoFailed = (error: string): Action<TodoActionTypes> => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_FAILED,
    payload: { error },
  };
};
