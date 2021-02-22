import { ITodo } from './../interfaces/todo';
import { Dispatch } from 'redux';
import {
  addTodo,
  addTodoSuccess,
  addTodoFailed,
  removeTodo,
  removeTodoSuccess,
  removeTodoFailed,
  fetchTodoList,
  fetchTodoListSuccess,
  fetchTodoListFailed,
  toggleTodo,
  toggleTodoSuccess,
  toggleTodoFailed,
} from '../actions/todo';
import * as TodoService from '../services/todo';

export const getTodoList = (uid: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(fetchTodoList());
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

export const onAddTodo = (todo: ITodo, uid: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(addTodo());
    TodoService.addTodo(todo, uid).then(
      () => {
        dispatch(addTodoSuccess(todo));
      },
      (error) => {
        dispatch(addTodoFailed(error.message));
      }
    );
  };
};

export const onRemoveTodo = (todo: ITodo, uid: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(removeTodo());
    TodoService.removeTodo(todo, uid).then(
      () => {
        dispatch(removeTodoSuccess(todo));
      },
      (error) => {
        dispatch(removeTodoFailed(error.message));
      }
    );
  };
};

export const onToggleTodo = (todo: ITodo, uid: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(toggleTodo());
    TodoService.toggleTodo(todo, uid).then(
      () => {
        dispatch(toggleTodoSuccess(todo));
      },
      (error) => {
        dispatch(toggleTodoFailed(error.message));
      }
    );
  };
};
