import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';

import { AUTH_LOGIN_SUCCESS } from '../modules/authReducer';
import { fetchCarFail, fetchCarSuccess, fetchingCar } from '../modules/carReducer';

import { fetchInfoFail, fetchInfoSuccess, fetchingInfo } from '../modules/infoReducer';
import { fetchPointFail, fetchPointSuccess, fetchingPoint } from '../modules/pointReducer';


import coreApi from '../../api-services/core';
import request from './coreSaga';


const selectToken = state => state.auth.token;  

export function* fetchData() {
  put(fetchingCar());
  put(fetchingInfo());
  put(fetchingPoint());

  try {
    const [carResult, infoResult, pointResult ] =
      yield all([
        call(request, coreApi.getCars()),
        call(request, coreApi.getInfos()),
        call(request, coreApi.getPoints()),
      ]);
    yield put(fetchCarSuccess(carResult.data));
    yield put(fetchInfoSuccess(infoResult.data));
    yield put(fetchPointSuccess(pointResult.data));
  } catch (error) {
    console.log(error);
    const errors = _.get(error, 'response.data.lstErr', 'unknow');
    yield put(fetchCarFail(errors));
    yield put(fetchInfoFail(errors));
    yield put(fetchPointFail(errors));
  }
}

export function* processPersist () {
  const token = yield select(selectToken);
  if (token) {
    yield call(fetchData); 
  } 
} 

export default function* apiSagaFlow() {
  yield all([
    takeEvery([REHYDRATE], processPersist),
    takeEvery([AUTH_LOGIN_SUCCESS], fetchData),
  ]);
}
