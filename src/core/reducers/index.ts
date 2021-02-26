import { combineReducers } from 'redux';
import * as fromTodo from './todo';
import * as fromAuth from './auth';
import * as fromUser from './user';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { rrfconfig } from '../constants/config';
import { createFirestoreInstance } from 'redux-firestore';
import 'firebase/firestore';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

export interface AppState {
  todo: fromTodo.State;
  auth: fromAuth.State;
  user: fromUser.State;
}

export const rootReducer = combineReducers<AppState>({
  todo: fromTodo.reducer,
  auth: fromAuth.reducer,
  user: fromUser.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const rrfProps = {
  firebase,
  config: rrfconfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
