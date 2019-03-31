import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { checkElemetnts } from '../../utils';

const component = props => shallow(<Headline {...props} />);

describe('Headline Component', () => {
  describe('Have props', () => {
    const props = {
      title: 'Test title',
      desc: 'Test desc',
    };

    checkElemetnts(
      component(props),
      'should render without errors',
      'headlineComponent',
      1,
    );

    checkElemetnts(component(props), 'should render title', 'header', 1);

    checkElemetnts(component(props), 'should render description', 'desc', 1);
  });

  describe('No props', () => {
    checkElemetnts(component(), 'should not render ', 'headlineComponent', 0);
  });
});
