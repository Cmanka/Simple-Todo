import { ITodo } from '../interfaces/todo';

export enum TodoActionTypes {
  ADD_TODO = '[Todo] ADD_TODO',
  REMOVE_TODO = '[Todo] REMOVE_TODO',
  TOGGLE_TODO = '[Todo] TOGGLE_TODO',
}

export const addTodo = (todo: ITodo) => {
  console.log('ASD');
  return { payload: { todo }, type: TodoActionTypes.ADD_TODO };
};

export const removeTodo = (todo: ITodo) => {
  return { payload: { todo }, type: TodoActionTypes.REMOVE_TODO };
};

export const toggleTodo = (todo: ITodo) => {
  return { payload: { todo }, type: TodoActionTypes.TOGGLE_TODO };
};
