import { ITodo } from '../../pages/Todo/interfaces/ITodo';
import { TodoAction } from '../../pages/Todo/interfaces/ITodoAction';
import * as todoTypes from './actionTypes';

export const addTodo = (todo: ITodo): TodoAction => {
	return { todo: todo, type: todoTypes.ADD_TODO };
};

export const removeTodo = (todo: ITodo): TodoAction => {
	return { todo: todo, type: todoTypes.REMOVE_TODO };
};

export const toggleTodo = (todo: ITodo): TodoAction => {
	return { todo: todo, type: todoTypes.TOGGLE_TODO };
};
