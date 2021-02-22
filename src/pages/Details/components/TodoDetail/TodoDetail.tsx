import React, { FC } from 'react';
import * as Styled from './styled';
import { TodoDetailProps } from './types';

const TodoDetail: FC<TodoDetailProps> = ({ todo }: TodoDetailProps) => {
  return (
    <Styled.DetailTodoBlock>
      <strong>Id:</strong>
      {todo.id}
      <br />
      <strong>Title:</strong>
      {todo.title}
      <br />
      <strong>Completed:</strong>
      {todo.completed === true ? 'completed' : 'not completed'}
    </Styled.DetailTodoBlock>
  );
};

export default TodoDetail;
