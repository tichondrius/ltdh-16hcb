import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';

import {
  authLoginFaile, authLoginSuccess,
  AUTH_LOGIN, AUTH_LOGOUT
} from '../modules/authReducer';
import { persistedDone } from '../modules/configReducer';
import apiAuth from '../../api-services/auth';
import request from './coreSaga';


export function* afterPersist() {
  // should dispatch persist done
  yield put(persistedDone());
}

export function* login(action) {
  try {
    const { username, password } = action;
    const response = yield call(request, apiAuth.postLogin(username, password));
    const { data } = response;
    yield put(authLoginSuccess({
      token: data.token,
      username: data.username,
    }));
  } catch(error) {
    const errors = _.get(error, 'response.data.lstErr', 'unknow');
    yield put(authLoginFaile(errors));
  }
}


export default function* authSagaFlow() {
  yield all([
    takeEvery([AUTH_LOGIN], login),
    takeEvery([REHYDRATE], afterPersist),
  ]);
}
