import { all } from 'redux-saga/effects';
import authSagaFlow from './authSaga'; 
import socketFlow from './socketSaga';
import apiFlow from './apiSaga';


export default function* rootSaga() {
  yield all([
    authSagaFlow(),
    socketFlow(),
    apiFlow(),
  ]);
}
