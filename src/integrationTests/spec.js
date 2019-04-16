import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPosts } from '../containers/MainPage/actions';

describe('fetchPost action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Test title 1',
        body: 'Test body 1,',
      },
      {
        title: 'Test title 2',
        body: 'Test body 2,',
      },
      {
        title: 'Test title 3',
        body: 'Test body 3,',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.mainPageReducer.posts).toBe(expectedState);
    });
  });
});
