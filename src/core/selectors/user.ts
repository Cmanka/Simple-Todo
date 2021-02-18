import { AppState } from '../reducers';
import { createSelector } from 'reselect';

const selectUserState = (state: AppState) => state.user;

export const selectUserLoadingState = createSelector(
  selectUserState,
  (state) => state.isLoading
);

export const selectUserDataState = createSelector(
  selectUserState,
  (state) => state.data
);
