import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ITodo } from '../../core/interfaces/todo';
import { selectUserDataState } from '../../core/selectors/user';
import { getTodoById } from '../../core/services/todo';
import TodoDetail from './components/TodoDetail/TodoDetail';
import { StyledDetailsPage } from './styled';
import { DetailsProps } from './types';

const DetailsPage: React.FC<DetailsProps> = memo(({ match }: DetailsProps) => {
  const [todo, setTodo] = React.useState<ITodo>();
  const user = useSelector(selectUserDataState);

  React.useEffect(() => {
    if (user)
      getTodoById(match.params.id, user.uid).then((res) => {
        setTodo({ ...res });
      });
  }, []);

  if (!todo?.id) {
    return (
      <StyledDetailsPage>
        <h1>Deatile information not founded todo({match.params.id})</h1>
      </StyledDetailsPage>
    );
  }

  return (
    <StyledDetailsPage>
      <h1>Details Information about todo {match.params.id}</h1>
      <TodoDetail todo={todo} />
    </StyledDetailsPage>
  );
});

export default DetailsPage;
