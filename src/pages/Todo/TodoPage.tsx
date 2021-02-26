import React, { FC, useCallback, memo } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import * as Styled from './styled';
import { ITodo } from '../../core/interfaces/todo';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTodoListLoadingState,
  selectTodoListState,
} from '../../core/selectors/todo';
import Todo from './components/Todo/Todo';
import {
  fetchTodoList,
  addTodo,
  removeTodo,
  toggleTodo,
} from '../../core/actions/todo';

const TodoPage: FC = memo(() => {
  const todoList = useSelector(selectTodoListState);
  const isLoading = useSelector(selectTodoListLoadingState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const onAddTodo = useCallback((todo: ITodo) => {
    dispatch(addTodo(todo));
  }, []);

  const onRemoveTodo = useCallback((todoId: string) => {
    dispatch(removeTodo(todoId));
  }, []);

  const onToggleTodo = useCallback((todoId: string) => {
    dispatch(toggleTodo(todoId));
  }, []);

  return (
    <Styled.TodoPage>
      <Styled.Header>
        <Styled.Title>Simple Todo</Styled.Title>
      </Styled.Header>
      <TodoForm onAdd={onAddTodo} />
      {isLoading ? (
        <Styled.TodoList>
          <Styled.TodoListTitle>List is loading</Styled.TodoListTitle>
        </Styled.TodoList>
      ) : !todoList.length ? (
        <Styled.TodoList>
          <Styled.TodoListTitle>List is empty</Styled.TodoListTitle>
        </Styled.TodoList>
      ) : (
        <Styled.TodoList>
          <Styled.UL>
            {todoList.map((todo) => (
              <Todo
                todoId={todo.id}
                todoCompleted={todo.completed}
                todoTitle={todo.title}
                onToggle={onToggleTodo}
                onRemove={onRemoveTodo}
                key={todo.id}
              />
            ))}
          </Styled.UL>
        </Styled.TodoList>
      )}
      <Styled.Footer>
        <Styled.Title>Footer</Styled.Title>
      </Styled.Footer>
    </Styled.TodoPage>
  );
});

export default TodoPage;
