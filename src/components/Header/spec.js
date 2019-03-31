import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { checkElemetnts } from '../../utils';

describe('Header component', () => {
  const component = shallow(<Header />);

  checkElemetnts(component, 'should render title', 'title', 1);
  checkElemetnts(component, 'should render logo image', 'logo', 1);
});
