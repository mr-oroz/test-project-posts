import { put, takeEvery, call } from 'redux-saga/effects';
import { service } from '../http/service';
import { GET_USERS } from '../redux/types';
import { setUserAction, errorAction, loadingAction } from '../redux/actions';


function* usersFetchWorker(action) {
  try {
    const {payload} = action
    yield put(loadingAction(true))
    yield put(errorAction(null))
    const user = yield call(() => service.getUsers(`users/${payload}`))
    yield put(setUserAction(user.data))
    yield put(loadingAction(false))
  } catch (e) {
    console.log(e)
    yield put(errorAction('error'))
  }
}

export function* usersWatcher() {
  yield takeEvery(GET_USERS, usersFetchWorker)
}