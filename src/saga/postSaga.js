import { put, takeEvery, call } from 'redux-saga/effects';
import { service } from '../http/service';
import { GET_POSTS } from '../redux/types';
import { setPostAction, errorAction, loadingAction } from '../redux/actions';

function* usersFetchWorker(action) {
  yield put(loadingAction(true))
  try {
    const postsData = yield call(() => service.getPosts(`posts?_page=${action.page}`))
    const postsWithCommentsAndAlbums = yield Promise.all(
      postsData.data.map((post) =>
        Promise.all([
          service.getComments(`posts/${post.id}/comments`),
          service.getAlbums(`albums/${post.userId}/photos`),
        ]).then(([commentsResponse, albumsResponse]) => ({
          ...post,
          comments: commentsResponse.data,
          avatar: albumsResponse.data,
        }))
      )
    );
    yield put(loadingAction(false))
    yield put(errorAction(null))
    yield put(setPostAction(postsWithCommentsAndAlbums))
  } catch (e) {
    yield put(errorAction('error'))
    yield put(loadingAction(false))
  }
}

export function* postWatcher() {
  yield takeEvery(GET_POSTS, usersFetchWorker)
}