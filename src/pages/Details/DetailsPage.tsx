import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { ITodo } from '../../core/interfaces/todo';
import { selectUserDataState } from '../../core/selectors/user';
import { getTodoById } from '../../core/services/todo';
import TodoDetail from './components/TodoDetail/TodoDetail';
import * as Styled from './styled';
import { DetailsProps } from './types';

const DetailsPage: FC<DetailsProps> = memo(({ match }: DetailsProps) => {
  const [todo, setTodo] = React.useState<ITodo>();
  const user = useSelector(selectUserDataState);

  React.useEffect(() => {
    getTodoById(match.params.id, user.uid).then((res) => {
      setTodo({ ...res });
    });
  }, []);

  return (
    <>
      {!todo ? (
        <Styled.DetailsPage>
          <h1>Deatile information not founded todo({match.params.id})</h1>
        </Styled.DetailsPage>
      ) : (
        <Styled.DetailsPage>
          <h1>Details Information about todo {match.params.id}</h1>
          <TodoDetail todo={todo} />
        </Styled.DetailsPage>
      )}
    </>
  );
});

export default DetailsPage;
