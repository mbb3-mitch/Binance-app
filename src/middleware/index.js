import { fork, all, put } from 'redux-saga/effects';

import saveUserName from './save-user-name';
import initialLoading from './initial-loading';

import { INITIAL_LOADING } from '../constants/actions';

export default function* sagas() {
  yield all([saveUserName, initialLoading].map(fork));

  yield put({ type: INITIAL_LOADING });
}
