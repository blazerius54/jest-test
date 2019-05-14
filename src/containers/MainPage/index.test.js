import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './index';
import { checkElements, testStore } from '../../utils';

const component = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<MainPage store={store} />)
    .childAt(0)
    .dive();
};

describe('MainPage', () => {
  const initialState = {
    mainPageReducer: {
      posts: [
        {
          title: 'test title 1',
          body: 'test body text',
        },
        {
          title: 'test title 2',
          body: 'test body text',
        },
        {
          title: 'test title 3',
          body: 'test body text',
        },
      ],
    },
  };

  checkElements(
    component(initialState),
    'should render without errors',
    'mainPageComponent',
    1,
  );

  it('toggleBtn method should update state correctly', () => {
    const classInstance = component(initialState).instance();
    classInstance.toggleBtn();
    const newStateBtn = classInstance.state.showBtn;
    expect(newStateBtn).toBe(false);
  })
});
