import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoListLoadingState } from '../../../../core/selectors/todo';
import Todo from '../Todo/Todo';
import { StyledTodoList, StlyledUL, StyledTitle } from './styled';
import { TodoListProps } from './types';

const TodoList: React.FC<TodoListProps> = memo(
  ({ todoList, onToggle, onRemove }: TodoListProps) => {
    const isLoading = useSelector(selectTodoListLoadingState);

    if (isLoading) {
      return (
        <StyledTodoList>
          <StyledTitle>List is loading</StyledTitle>
        </StyledTodoList>
      );
    }

    if (!todoList.length) {
      return (
        <StyledTodoList>
          <StyledTitle>List is empty</StyledTitle>
        </StyledTodoList>
      );
    }

    return (
      <StyledTodoList>
        <StlyledUL>
          {todoList.map((todo) => (
            <Todo
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
              key={todo.id}
            />
          ))}
        </StlyledUL>
      </StyledTodoList>
    );
  }
);

export default TodoList;
