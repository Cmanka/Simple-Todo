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

export const fetchTodoList = (): IFetchTodoList => {
  return { type: TodoActionTypes.FETCH_TODOLIST };
};

export const fetchTodoListSuccess = (
  todoList: ITodo[]
): IFetchTodoListSuccess => {
  return {
    type: TodoActionTypes.FETCH_TODOLIST_SUCCESS,
    payload: { todoList },
  };
};

export const fetchTodoListFailed = (error: string): IFetchTodoListFailed => {
  return {
    type: TodoActionTypes.FETCH_TODOLIST_FAILED,
    payload: { error },
  };
};

export const addTodo = (): IAddTodo => {
  return { type: TodoActionTypes.ADD_TODO };
};

export const addTodoSuccess = (todo: ITodo): IAddTodoSuccess => {
  return { type: TodoActionTypes.ADD_TODO_SUCCESS, payload: { todo } };
};

export const addTodoFailed = (error: string): IAddTodoFailed => {
  return { type: TodoActionTypes.ADD_TODO_FAILED, payload: { error } };
};

export const removeTodo = (): IRemoveTodo => {
  return { type: TodoActionTypes.REMOVE_TODO };
};

export const removeTodoSuccess = (todo: ITodo): IRemoveTodoSuccess => {
  return { type: TodoActionTypes.REMOVE_TODO_SUCCESS, payload: { todo } };
};

export const removeTodoFailed = (error: string): IRemoveTodoFailed => {
  return { type: TodoActionTypes.REMOVE_TODO_FAILED, payload: { error } };
};

export const toggleTodo = (): IToggleTodo => {
  return { type: TodoActionTypes.TOGGLE_TODO };
};

export const toggleTodoSuccess = (todo: ITodo): IToggleTodoSuccess => {
  return { type: TodoActionTypes.TOGGLE_TODO_SUCCESS, payload: { todo } };
};

export const toggleTodoFailed = (error: string): IToggleTodoFailed => {
  return {
    type: TodoActionTypes.TOGGLE_TODO_FAILED,
    payload: { error },
  };
};

interface IFetchTodoList extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODOLIST;
}

interface IFetchTodoListSuccess extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODOLIST_SUCCESS;
  payload: { todoList: ITodo[] };
}

interface IFetchTodoListFailed extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODOLIST_FAILED;
  payload: { error: string };
}

interface IAddTodo extends Action<TodoActionTypes> {
  type: TodoActionTypes.ADD_TODO;
}

interface IAddTodoSuccess extends Action<TodoActionTypes> {
  type: TodoActionTypes.ADD_TODO_SUCCESS;
  payload: { todo: ITodo };
}

interface IAddTodoFailed extends Action<TodoActionTypes> {
  type: TodoActionTypes.ADD_TODO_FAILED;
  payload: { error: string };
}

interface IRemoveTodo extends Action<TodoActionTypes> {
  type: TodoActionTypes.REMOVE_TODO;
}

interface IRemoveTodoSuccess extends Action<TodoActionTypes> {
  type: TodoActionTypes.REMOVE_TODO_SUCCESS;
  payload: { todo: ITodo };
}

interface IRemoveTodoFailed extends Action<TodoActionTypes> {
  type: TodoActionTypes.REMOVE_TODO_FAILED;
  payload: { error: string };
}

interface IToggleTodo extends Action<TodoActionTypes> {
  type: TodoActionTypes.TOGGLE_TODO;
}

interface IToggleTodoSuccess extends Action<TodoActionTypes> {
  type: TodoActionTypes.TOGGLE_TODO_SUCCESS;
  payload: { todo: ITodo };
}

interface IToggleTodoFailed extends Action<TodoActionTypes> {
  type: TodoActionTypes.TOGGLE_TODO_FAILED;
  payload: { error: string };
}

export type TodoAction =
  | IFetchTodoList
  | IFetchTodoListSuccess
  | IFetchTodoListFailed
  | IAddTodo
  | IAddTodoSuccess
  | IAddTodoFailed
  | IRemoveTodo
  | IRemoveTodoSuccess
  | IRemoveTodoFailed
  | IToggleTodo
  | IToggleTodoSuccess
  | IToggleTodoFailed;
