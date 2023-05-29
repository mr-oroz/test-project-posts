import { SET_USERS, SET_POSTS, LOADING, ERROR } from "./types";
const initialState = {
  posts: [],
  loading: false,
  error: null,
  user: {}
}
export const reducer = (state = initialState, action) => {
  const {payload, type} = action;

  switch(type) {
    case SET_POSTS: {
      return {...state, posts: payload}
    }
    case SET_USERS: {
      return {...state, user: payload}
    }
    case LOADING: {
      return {...state, loading: payload}
    }
    case ERROR: {
      return {...state, error: payload}
    }
    
    default: 
      return state;
  }
}