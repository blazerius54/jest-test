import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header component', () => {
  it('should render title', () => {
    const component = shallow(<Header />);
    const headerTitle = component.find('h1');
    expect(headerTitle.length).toBe(1);
  });
});
