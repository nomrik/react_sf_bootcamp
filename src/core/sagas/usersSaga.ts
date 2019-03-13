import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

import { getUsers } from '../services/usersServices';
import normalizeUsers from '../utils/normalizeUsers';
import userActionCreators from '../actionCreators/userActionCreators';
import { LOAD_USERS } from '../actionTypes/userActionTypes';

function* onLoadUsers() {
    try {
      yield put(userActionCreators.loadUsersRequest());
      const response = yield call(getUsers);
      yield put(userActionCreators.loadUsersSuccess(normalizeUsers(response)));
    } catch (error) {
      yield put(userActionCreators.loadUsersFailure(error));
    }
}

function* watchOnLoadUsers() {
    yield takeEvery(LOAD_USERS, onLoadUsers);
}

export default function* usersSaga() {
    yield all([
        fork(watchOnLoadUsers)
    ]);
}