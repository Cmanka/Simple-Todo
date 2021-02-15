import React, { useCallback, memo } from 'react';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { StyledTodoPage } from './styled';
import Header from './components/Header/Header';
import { ITodo } from '../../core/interfaces/todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../core/actions/todo';
import { selectTodoListState } from '../../core/selectors/todo';

const TodoPage: React.FC = memo(() => {
  const todoList = useSelector(selectTodoListState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onAddTodo = useCallback((todo: ITodo) => {
    dispatch(addTodo(todo));
  }, []);

  const onRemoveTodo = useCallback((todo: ITodo) => {
    dispatch(removeTodo(todo));
  }, []);

  const onToggleTodo = useCallback((todo: ITodo) => {
    dispatch(toggleTodo(todo));
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
