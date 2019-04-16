import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/combineReducers';

export const middlewares = [ReduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;


// export const middlewares = [ReduxThunk];
//
// export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//
// const store = createStoreWithMiddleware(rootReducer);
//
// export default store;
