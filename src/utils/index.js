import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/combineReducers';
import { middlewares } from '../store';

export const checkElemetnts = (component, text, element, result) => {
  it(text, () => {
    const findElement = component.find(`[data-test='${element}']`);
    expect(findElement.length).toBe(result);
  });
};

export const propsError = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

// export const testStore = initialState =>
//   createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};