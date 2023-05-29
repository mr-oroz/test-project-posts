import {all} from 'redux-saga/effects';
import { postWatcher } from './postSaga';
import { usersWatcher } from './usersSaga';


// whathers на одном функцие собираем с помощью эффект all

export function* rootWatcher () {
  yield all([postWatcher(), usersWatcher()]);
} 