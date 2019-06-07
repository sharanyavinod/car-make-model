import {
  takeEvery, call, put, select, fork, all
} from 'redux-saga/effects';

import {
  setMake, setModel, throwError
} from '../actions';
import { fetchMakeApi, fetchModelApi } from '../api';

import { FETCH_MAKE, SAVE_MAKE } from '../constants/actions';

import { getMakeSelected } from './selector';


function* fetchMake() {
  try {
    const data = yield call(fetchMakeApi);
    yield put(setMake(data));
  }
  catch (e) {
    //Action for handling errors : can pass custom error msgs as well
    //Todo: display error msg
    yield put(throwError(e));
  }
}

function* fetchModel() {
  try {
    const makeSelected = yield select(getMakeSelected);
    const data = yield call(fetchModelApi, makeSelected);
    yield put(setModel(data));
  }
  catch (e) {
    //Action for handling errors : can pass custom error msgs as well
    //Todo: display error msg
    yield put(throwError(e));
  }
}



export function* watchFetchMake() {
  yield takeEvery(FETCH_MAKE, fetchMake)
}

export function* watchSaveMake() {
  yield takeEvery(SAVE_MAKE, fetchModel)
}

export default function* root() {
  yield all([
    fork(watchFetchMake),
    fork(watchSaveMake)
  ])
}
