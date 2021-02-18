import { ITodo } from '../../../../core/interfaces/todo';

export interface TodoProps {
  todo: ITodo;
  onToggle(todo: ITodo): void;
  onRemove(todo: ITodo): void;
}

export interface CompletedProps {
  isCompleted: boolean;
}
