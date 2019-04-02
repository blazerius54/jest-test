import { postRequest, postSuccess, postError } from './actions';
import reducer, { initialState } from './reducer';

const posts = [
  { title: 'Test 1' },
  { title: 'Test 2' },
  { title: 'Test 3' },
  { title: 'Test 4' },
  { title: 'Test 5' },
];

describe('Post reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should return new request state', () => {
    const newState = reducer(initialState, postRequest());
    expect(newState.loading).toBeTruthy();
  });

  it('should return new state with posts', () => {
    const newState = reducer(initialState, postSuccess(posts));
    expect(newState.posts).toEqual(posts);
  });

  it('should return new state with errors', () => {
    const newState = reducer(initialState, postError());
    expect(newState.error).toBeTruthy();
  });
});
