import { ITodo } from '../../interfaces/ITodo';

export interface TodoListProps {
	todoList: ITodo[];
	onToggle(id: number): void;
	onRemove(id: number): void;
}
