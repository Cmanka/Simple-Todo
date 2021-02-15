import { ITodo } from '../../../../core/interfaces/todo';

export interface TodoListProps {
  todoList: ITodo[];
  onToggle(todo: ITodo): void;
  onRemove(todo: ITodo): void;
}
