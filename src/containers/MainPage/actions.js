import axios from 'axios';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from './consts';

// Sync actions
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

// Async actions
export const fetchPosts = () => dispatch => {
  dispatch(postRequest());
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => dispatch(postSuccess(response.data)))
    .catch(() => dispatch(postError()));
};
