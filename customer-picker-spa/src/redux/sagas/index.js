import { all } from 'redux-saga/effects';
import authSagaFlow from './authSaga';
import roomSagaFlow from './roomSaga';


export default function* rootSaga() {
  yield all([
    authSagaFlow(),
    roomSagaFlow()
  ]);
}
