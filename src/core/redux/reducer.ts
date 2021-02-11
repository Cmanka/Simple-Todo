import { ITodo } from '../../pages/Todo/interfaces/ITodo';
import { TodoAction } from '../../pages/Todo/interfaces/ITodoAction';
import { TodoState } from '../../pages/Todo/interfaces/ITodoState';
import * as actionTypes from './actionTypes';

const initialState: TodoState = {
	todoList: JSON.parse(localStorage.getItem('todoList') || '[]'),
};

const reducer = (
	state: TodoState = initialState,
	action: TodoAction
): TodoState => {
	switch (action.type) {
		case actionTypes.ADD_TODO: {
			const newTodo: ITodo = {
				id: Date.now(),
				title: action.todo.title,
				completed: false,
			};

			return { ...state, todoList: [...state.todoList, newTodo] };
		}

		case actionTypes.REMOVE_TODO: {
			const updatedTodoList: ITodo[] = state.todoList.filter(
				(todo) => todo.id !== action.todo.id
			);
			return { ...state, todoList: updatedTodoList };
		}

		case actionTypes.TOGGLE_TODO: {
			const updatedTodoList: ITodo[] = state.todoList.map((todo) =>
				todo.id === action.todo.id
					? { ...todo, completed: !todo.completed }
					: todo
			);
			return { ...state, todoList: updatedTodoList };
		}

		default:
			return state;
	}
};

export default reducer;
