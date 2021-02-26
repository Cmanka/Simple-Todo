import React, { FC, memo } from 'react';
import { auth } from '../../core/firebase';
import { ITodo } from '../../core/interfaces/todo';
import { getTodoById } from '../../core/services/todo';
import * as Styled from './styled';
import { DetailsProps } from './types';

const DetailsPage: FC<DetailsProps> = memo(({ match }: DetailsProps) => {
  const [todo, setTodo] = React.useState<ITodo>();
  const user = auth.currentUser;

  React.useEffect(() => {
    getTodoById(match.params.id, user.uid).then((res) => {
      setTodo({ ...res });
    });
  }, []);

  return (
    <>
      {!todo ? (
        <Styled.DetailsPage>
          <h1>Loading...</h1>
        </Styled.DetailsPage>
      ) : (
        <Styled.DetailsPage>
          <h1>Details Information about todo {match.params.id}</h1>
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
        </Styled.DetailsPage>
      )}
    </>
  );
});

export default DetailsPage;
