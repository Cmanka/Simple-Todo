import { ITodo } from './ITodo';

export interface TodoAction {
	todo: ITodo;
	type: string;
}
