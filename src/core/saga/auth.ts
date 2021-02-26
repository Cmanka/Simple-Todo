import { put, call, takeEvery } from 'redux-saga/effects';
import {
  AuthActionTypes,
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
  logout,
} from '../actions/auth';
import { Action } from '../interfaces/action';
import { login, logout as logoutServ, register } from '../services/auth';

function* loginWorker(action: Action<AuthActionTypes>) {
  try {
    const data = yield call(
      login,
      action.payload.login,
      action.payload.password
    );
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

function* registerWorker(action: Action<AuthActionTypes>) {
  try {
    const data = yield call(register, { ...action.payload.data });
    yield put(registerSuccess(data.uid));
  } catch (e) {
    yield put(registerFailed(e.message));
  }
}

function* logoutWorker() {
  yield call(logoutServ);
  return put(logout());
}

export function* authWatcher(): Generator {
  yield takeEvery(AuthActionTypes.LOGIN, loginWorker);
  yield takeEvery(AuthActionTypes.REGISTER, registerWorker);
  yield takeEvery(AuthActionTypes.LOGOUT, logoutWorker);
}
