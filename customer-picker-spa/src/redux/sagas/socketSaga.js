import { REHYDRATE } from 'redux-persist/constants';
import io from 'socket.io-client';
import { takeEvery, call, take, put, all, select, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import _ from 'lodash';

import {
  authLoginFaile, authLoginSuccess,
  AUTH_LOGIN, AUTH_LOGOUT, AUTH_LOGIN_SUCCESS
} from '../modules/authReducer';
import { persistedDone } from '../modules/configReducer';
import { BASE_URL } from './coreSaga';

let socket;
export const getSocket = () => {
  return socket;
}  
export const getToken = state => state.auth.token;  
const connect = () => {
  socket = io(BASE_URL);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log('connect socket successfully');
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('something.server.want.to.send', (message) => {
      console.log('something.server.want.to.send', message);
      emit({ type: 'XXX'});
    });
    return () => {};
  });
}
function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}
function* handleIO(socket) {
  yield fork(read, socket);
}


function* socketHandle() {
  socket = yield call(connect);
  const task = yield fork(handleIO, socket);
  yield call(sendToken);
}


export function* sendToken (token) {
  yield token = yield select(getToken);
  if (token && socket) {
    socket.emit('auth.user.login', token);
  } 
} 

export function* sendLogoutSocket(params) {
  if (socket) {
    socket.emit('auth.user.logout')
  }
}

export function* afterPersist() {
  // should dispatch persist done
  yield put(persistedDone());
  yield call(socketHandle);
}




export default function* socketFlow () {
  yield all([
    takeEvery([REHYDRATE], afterPersist),
    takeEvery([AUTH_LOGIN_SUCCESS], sendToken),
    takeEvery([AUTH_LOGOUT], sendLogoutSocket)
  ]);
}
