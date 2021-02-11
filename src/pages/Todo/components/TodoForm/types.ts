import { ITodo } from '../../interfaces/ITodo';

export interface TodoFormProps {
	onAdd(todo: ITodo | undefined): void;
}
