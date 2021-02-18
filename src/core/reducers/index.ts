import { combineReducers } from 'redux';
import * as fromTodo from './todo';
import * as fromAuth from './auth';
import * as fromUser from './user';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { rrfconfig } from '../constants/config';
import { createFirestoreInstance } from 'redux-firestore';
import 'firebase/firestore';

const middlewares = [thunk.withExtraArgument(getFirebase)];

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

export const rrfProps = {
  firebase,
  config: rrfconfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
