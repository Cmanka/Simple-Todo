import React, { memo } from 'react';
import Todo from '../Todo/Todo';
import { StyledTodoList, StlyledUL } from './styled';
import { TodoListProps } from './types';

const TodoList: React.FC<TodoListProps> = memo(
  ({ todoList, onToggle, onRemove }: TodoListProps) => {
    if (!todoList.length) {
      return (
        <StyledTodoList>
          <h1>List is empty</h1>
        </StyledTodoList>
      );
    }

    return (
      <StyledTodoList>
        <StlyledUL>
          {todoList.map((todo) => (
            <Todo
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
              key={todo.id}
            />
          ))}
        </StlyledUL>
      </StyledTodoList>
    );
  }
);

export default TodoList;
