import { ITodo } from '../../../../core/interfaces/todo';

export interface TodoFormProps {
  onAdd(todo: ITodo): void;
}
