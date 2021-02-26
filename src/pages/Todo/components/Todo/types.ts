export interface TodoProps {
  todoId: string;
  todoCompleted: boolean;
  todoTitle: string;
  onToggle(todoId: string): void;
  onRemove(todoId: string): void;
}

export interface CompletedProps {
  isCompleted: boolean;
}
