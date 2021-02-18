import React, { useCallback, memo } from 'react';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { StyledTodoPage } from './styled';
import Header from './components/Header/Header';
import { ITodo } from '../../core/interfaces/todo';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoListState } from '../../core/selectors/todo';
import {
  toggleTodo,
  getTodoList,
  addTodo,
  removeTodo,
} from '../../core/thunks/todo';
import { selectUserDataState } from '../../core/selectors/user';

const TodoPage: React.FC = memo(() => {
  const todoList = useSelector(selectTodoListState);
  const user = useSelector(selectUserDataState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (user) dispatch(getTodoList(user.uid));
  }, []);

  const onAddTodo = useCallback((todo: ITodo) => {
    if (user) dispatch(addTodo(todo, user));
  }, []);

  const onRemoveTodo = useCallback((todo: ITodo) => {
    if (user) dispatch(removeTodo(todo, user));
  }, []);

  const onToggleTodo = useCallback((todo: ITodo) => {
    if (user) dispatch(toggleTodo(todo, user));
  }, []);

  return (
    <StyledTodoPage>
      <Header />
      <TodoForm onAdd={onAddTodo} />
      <TodoList
        todoList={todoList}
        onToggle={onToggleTodo}
        onRemove={onRemoveTodo}
      />
      <Footer />
    </StyledTodoPage>
  );
});

export default TodoPage;
