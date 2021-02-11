import { ITodo } from '../../interfaces/ITodo';

export interface TodoProps {
	todo: ITodo;
	onToggle(todo: ITodo): void;
	onRemove(todo: ITodo): void;
}

export interface CompletedProps {
	isCompleted: boolean | undefined;
}
