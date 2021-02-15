import { createSelector } from 'reselect';
import { AppState } from '../reducers/index';

const selectTodoState = (state: AppState) => state.todo;

export const selectTodoListState = createSelector(
  selectTodoState,
  (state) => state.todoList
);
