import React, { FC, useCallback, memo } from 'react';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import * as Styled from './styled';
import Header from './components/Header/Header';
import { ITodo } from '../../core/interfaces/todo';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoListState } from '../../core/selectors/todo';
import * as TodoAct from '../../core/thunks/todo';
import { selectUserID } from '../../core/selectors/auth';

const TodoPage: FC = memo(() => {
  const todoList = useSelector(selectTodoListState);
  const uid = useSelector(selectUserID);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(TodoAct.getTodoList(uid));
  }, []);

  const onAddTodo = useCallback((todo: ITodo) => {
    dispatch(TodoAct.onAddTodo(todo, uid));
  }, []);

  const onRemoveTodo = useCallback((todo: ITodo) => {
    dispatch(TodoAct.onRemoveTodo(todo, uid));
  }, []);

  const onToggleTodo = useCallback((todo: ITodo) => {
    dispatch(TodoAct.onToggleTodo(todo, uid));
  }, []);

  return (
    <Styled.TodoPage>
      <Header />
      <TodoForm onAdd={onAddTodo} />
      <TodoList
        todoList={todoList}
        onToggle={onToggleTodo}
        onRemove={onRemoveTodo}
      />
      <Footer />
    </Styled.TodoPage>
  );
});

export default TodoPage;
