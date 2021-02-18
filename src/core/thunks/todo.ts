import { IUser } from './../interfaces/user';
import { ITodo } from './../interfaces/todo';
import { Dispatch } from 'redux';
import {
  addTodoLoading,
  addTodoSuccess,
  addTodoFailed,
  removeTodoLoading,
  removeTodoSuccess,
  removeTodoFailed,
  fetchTodoListLoading,
  fetchTodoListSuccess,
  fetchTodoListFailed,
  toggleTodoLoading,
  toggleTodoSuccess,
  toggleTodoFailed,
} from '../actions/todo';
import * as TodoService from '../services/todo';

export const getTodoList = (uid: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTodoListLoading());
    TodoService.getTodoList(uid).then(
      (todoList) => {
        if (!todoList) dispatch(fetchTodoListSuccess([]));
        else dispatch(fetchTodoListSuccess(todoList));
      },
      (error) => {
        dispatch(fetchTodoListFailed(error.message));
      }
    );
  };
};

export const addTodo = (todo: ITodo, user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch(addTodoLoading());
    TodoService.addTodo(todo, user).then(
      () => {
        dispatch(addTodoSuccess(todo));
      },
      (error) => {
        dispatch(addTodoFailed(error.message));
      }
    );
  };
};

export const removeTodo = (todo: ITodo, user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch(removeTodoLoading());
    TodoService.removeTodo(todo, user).then(
      () => {
        dispatch(removeTodoSuccess(todo));
      },
      (error) => {
        dispatch(removeTodoFailed(error.message));
      }
    );
  };
};

export const toggleTodo = (todo: ITodo, user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleTodoLoading());
    TodoService.toggleTodo(todo, user).then(
      () => {
        dispatch(toggleTodoSuccess(todo));
      },
      (error) => {
        dispatch(toggleTodoFailed(error.message));
      }
    );
  };
};
