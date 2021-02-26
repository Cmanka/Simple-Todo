import React, { memo, FC } from 'react';
import { TodoProps } from './types';
import * as Styled from './styled';
import { Link } from 'react-router-dom';

const Todo: FC<TodoProps> = memo(
  ({ todoId, todoCompleted, todoTitle, onToggle, onRemove }: TodoProps) => {
    const url = `/todo/${todoId}`;
    return (
      <li>
        <Styled.TodoLabel>
          <Styled.Input
            type="checkbox"
            checked={todoCompleted}
            onChange={() => onToggle(todoId)}
          />
          <Styled.Title isCompleted={todoCompleted}>{todoTitle}</Styled.Title>
          <Styled.Button onClick={() => onRemove(todoId)}>Remove</Styled.Button>
          <Link to={url} style={Styled.linkStyle}>
            Detaile
          </Link>
        </Styled.TodoLabel>
      </li>
    );
  }
);

export default Todo;
