import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { checkElements } from '../../utils';

describe('Header component', () => {
  const component = shallow(<Header />);

  checkElements(component, 'should render title', 'title', 1);
  checkElements(component, 'should render logo image', 'logo', 1);
});
