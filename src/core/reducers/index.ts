import { combineReducers } from 'redux';
import * as fromTodo from './todo';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import firebase from '../database/index';

export interface AppState {
  todo: fromTodo.State;
}

export const rootReducer = combineReducers<AppState>({
  todo: fromTodo.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
