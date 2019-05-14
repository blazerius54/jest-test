import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/combineReducers';
import { middlewares } from '../store';

export const findElement = (component, element) => component.find(`[data-test='${element}']`);

export const checkElements = (component, text, element, result) => {
  it(text, () => {
    const searchedElement = findElement(component, element);
    expect(searchedElement.length).toBe(result);
  });
};

export const propsError = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testStore = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(...middlewares));
