import React, { memo, FC } from 'react';
import { TodoProps } from './types';
import * as Styled from './styled';
import { Link } from 'react-router-dom';

const Todo: FC<TodoProps> = memo(({ todo, onToggle, onRemove }: TodoProps) => {
  const url = `/todo/${todo.id}`;
  return (
    <li>
      <Styled.TodoLabel>
        <Styled.Input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <Styled.Title isCompleted={todo.completed}>{todo.title}</Styled.Title>
        <Styled.Button onClick={() => onRemove(todo)}>Remove</Styled.Button>
        <Link to={url} style={Styled.linkStyle}>
          Detaile
        </Link>
      </Styled.TodoLabel>
    </li>
  );
});

export default Todo;
