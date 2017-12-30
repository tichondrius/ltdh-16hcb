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
import { addCar, updateCar } from '../modules/carReducer';
import { addInfo, updateInfo } from '../modules/infoReducer';
import { addPoint, updatePoint } from '../modules/pointReducer';
import { SOCKET_METHOD } from '../../utils/enums';

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
    socket.on(SOCKET_METHOD.SERVER_INFO_ADDED, info => {
      console.log('info_add', info);
      emit(addInfo(info))
    });
    socket.on(SOCKET_METHOD.SERVER_INFO_UPDATED, info => {
      console.log('info_update', info);
      emit(updateInfo(info));
    });
    socket.on(SOCKET_METHOD.SERVER_POINT_ADDED, point => {
      console.log('point_add', point);
      emit(addPoint(point));
    });
    socket.on(SOCKET_METHOD.SERVER_POINT_UPDATED, point => {
      console.log('point_update', point);
      emit(updatePoint(point));
    });
    socket.on(SOCKET_METHOD.SERVER_CAR_ADDED, car => {
      emit(addCar(car));
      console.log('car_add', car);
    });
    socket.on(SOCKET_METHOD.SERVER_CAR_UPDATED, car => {
      emit(updateCar(car));
      console.log('car_update', car);
    });
    socket.on(SOCKET_METHOD.SERVER_SEND_POINT_REQUEST, point => {
      emit({
        type: SOCKET_METHOD.SERVER_SEND_POINT_REQUEST,
        point,
      });
      console.log('request_point', point);
    })  
    socket.on('something.server.want.to.send', (message) => {
      console.log('something.server.want.to.send', message);
      emit({ type: 'something.server.want.to.send', message});
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
