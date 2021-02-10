import { ITodo } from '../../interfaces/ITodo';

export interface TodoProps {
	todo: ITodo;
	onToggle(id: number): void;
	onRemove(id: number): void;
}

export interface CompletedProps {
	isCompleted: boolean;
}
