import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';
import {
    FETCH_ROOM_BYID,
    FetchedFullFilledByID,
    FETCHING_ROOMS,
    fetchRoomsSuccess,
    fetchRoomsFail,
  } from '../modules/roomReducer'
import { getRoom, getFullRooms } from '../../api-services/room';
import request from './coreSaga';


  
export function* getRoomByID(action) {
  try {
    const { roomID } = action;
    const response = yield call(request, getRoom(roomID));
    const { data } = response;
    const room = data[0];
    yield put(FetchedFullFilledByID({
      room
    }))
  } catch(error) {
      console.log(error);
  }
}

export function* getRooms() {
  try {
    const response = yield call(request, getFullRooms());
    const { data } = response;
    yield put(fetchRoomsSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(fetchRoomsFail(errors));
  }
}
export default function* roomSagaFlow() {
  yield all([
    takeEvery([FETCH_ROOM_BYID], getRoomByID),
    takeEvery([FETCHING_ROOMS], getRooms),
  ]);
}