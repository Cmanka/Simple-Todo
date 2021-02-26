import { all, fork } from 'redux-saga/effects';
import { authWatcher } from './auth';
import { todosWatcher } from './todo';
import { userWatcher } from './user';

export function* rootSaga(): Generator {
  yield all([fork(todosWatcher)]);
  yield all([fork(userWatcher)]);
  yield all([fork(authWatcher)]);
}
