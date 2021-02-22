import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoListLoadingState } from '../../../../core/selectors/todo';
import Todo from '../Todo/Todo';
import * as Styled from './styled';
import { TodoListProps } from './types';

const TodoList: FC<TodoListProps> = memo(
  ({ todoList, onToggle, onRemove }: TodoListProps) => {
    const isLoading = useSelector(selectTodoListLoadingState);

    if (isLoading) {
      return (
        <Styled.TodoList>
          <Styled.Title>List is loading</Styled.Title>
        </Styled.TodoList>
      );
    }

    return (
      <>
        {!todoList.length ? (
          <Styled.TodoList>
            <Styled.Title>List is empty</Styled.Title>
          </Styled.TodoList>
        ) : (
          <Styled.TodoList>
            <Styled.UL>
              {todoList.map((todo) => (
                <Todo
                  todo={todo}
                  onToggle={onToggle}
                  onRemove={onRemove}
                  key={todo.id}
                />
              ))}
            </Styled.UL>
          </Styled.TodoList>
        )}
      </>
    );
  }
);

export default TodoList;
