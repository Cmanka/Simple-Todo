import React, { memo } from 'react';
import { TodoProps } from './types';
import {
  StyledTodoLabel,
  StyledTitle,
  linkStyle,
  StyledButton,
  StyledInput,
} from './styled';
import { Link } from 'react-router-dom';

const Todo: React.FC<TodoProps> = memo(
  ({ todo, onToggle, onRemove }: TodoProps) => {
    const url = `/todo/${todo.id}`;
    return (
      <li key={todo.id}>
        <StyledTodoLabel>
          <StyledInput
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo)}
          />
          <StyledTitle isCompleted={todo.completed}>{todo.title}</StyledTitle>
          <StyledButton onClick={() => onRemove(todo)}>Remove</StyledButton>
          <Link to={url} style={linkStyle}>
            Detaile
          </Link>
        </StyledTodoLabel>
      </li>
    );
  }
);

export default Todo;
