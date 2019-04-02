import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from './consts';

export const postRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const postSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  posts,
});

export const postError = () => ({
  type: GET_POSTS_ERROR,
});
