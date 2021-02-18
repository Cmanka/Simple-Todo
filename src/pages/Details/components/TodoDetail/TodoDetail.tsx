import React from 'react';
import { StyledDetailTodoBlock } from './styled';
import { TodoDetailProps } from './types';

const TodoDetail: React.FC<TodoDetailProps> = ({ todo }: TodoDetailProps) => {
  return (
    <StyledDetailTodoBlock>
      <strong>Id:</strong>
      {todo.id}
      <br />
      <strong>Title:</strong>
      {todo.title}
      <br />
      <strong>Completed:</strong>
      {todo.completed === true ? 'completed' : 'not completed'}
    </StyledDetailTodoBlock>
  );
};

export default TodoDetail;
