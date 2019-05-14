import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { checkElements } from './utils';

const component = () => shallow(<App />);

describe('Should render without errors', () => {
  checkElements(component(), 'Should render component', 'appComponent', 1);
});
