import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { checkElemetnts } from './utils';

const component = () => shallow(<App />);

describe('Should render without errors', () => {
  checkElemetnts(component(), 'Should render component', 'appComponent', 1);
});
