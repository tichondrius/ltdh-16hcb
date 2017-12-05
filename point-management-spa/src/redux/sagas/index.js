import { all } from 'redux-saga/effects';
import authSagaFlow from './authSaga';


export default function* rootSaga() {
  yield all([
    authSagaFlow(),
  ]);
}
