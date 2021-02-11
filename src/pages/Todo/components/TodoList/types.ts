import { ITodo } from '../../interfaces/ITodo';

export interface TodoListProps {
	todoList: ITodo[];
	onToggle(todo: ITodo): void;
	onRemove(todo: ITodo): void;
}
