import {
  GET_POSTS,
  LOADING,
  SET_POSTS,
  SET_USERS,
  GET_USERS,

}
  from "./types";
// action для получение и для изменение состояния поста
export const setPostAction = (data) => ({ type: SET_POSTS, payload: data });
export const getPostAction = (page) => ({ type: GET_POSTS, page });


// actions обработка loading и erros
export const loadingAction = (bool) => ({ type: LOADING, payload: bool });
export const errorAction = (body) => ({ type: LOADING, payload: body });

// action для получение и для изменение состояния user
export const setUserAction = (data) => ({ type: SET_USERS, payload: data });
export const getUserAction = (userId) => ({ type: GET_USERS, payload: userId });


