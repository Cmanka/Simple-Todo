import { put, call, takeEvery } from 'redux-saga/effects';
import {
  addTodoFailed,
  addTodoSuccess,
  fetchTodoListFailed,
  fetchTodoListSuccess,
  removeTodoFailed,
  removeTodoSuccess,
  TodoActionTypes,
  toggleTodoFailed,
  toggleTodoSuccess,
} from '../actions/todo';
import { auth } from '../firebase';
import { Action } from '../interfaces/action';
import { getTodoList, addTodo, removeTodo, toggleTodo } from '../services/todo';

function* fetchTodoListWorker() {
  try {
    const data = yield call(getTodoList, auth.currentUser.uid);
    if (!data) yield put(fetchTodoListSuccess([]));
    else yield put(fetchTodoListSuccess(data));
  } catch (e) {
    yield put(fetchTodoListFailed(e.message));
  }
}

function* addTodoWorker(action: Action<TodoActionTypes>) {
  try {
    yield call(addTodo, action.payload.todo, auth.currentUser.uid);
    yield put(addTodoSuccess(action.payload.todo));
  } catch (e) {
    yield put(addTodoFailed(e.message));
  }
}

function* removeTodoWorker(action: Action<TodoActionTypes>) {
  try {
    yield call(removeTodo, action.payload.todoId, auth.currentUser.uid);
    yield put(removeTodoSuccess(action.payload.todoId));
  } catch (e) {
    yield put(removeTodoFailed(e.message));
  }
}

function* toggleTodoWorker(action: Action<TodoActionTypes>) {
  try {
    yield call(toggleTodo, action.payload.todoId, auth.currentUser.uid);
    yield put(toggleTodoSuccess(action.payload.todoId));
  } catch (e) {
    yield put(toggleTodoFailed(e.message));
  }
}

export function* todosWatcher(): Generator {
  yield takeEvery(TodoActionTypes.FETCH_TODOLIST, fetchTodoListWorker);
  yield takeEvery(TodoActionTypes.ADD_TODO, addTodoWorker);
  yield takeEvery(TodoActionTypes.REMOVE_TODO, removeTodoWorker);
  yield takeEvery(TodoActionTypes.TOGGLE_TODO, toggleTodoWorker);
}
