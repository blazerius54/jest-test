import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { checkElements, propsError } from '../../utils';

const component = props => shallow(<Headline {...props} />);

describe('Headline Component', () => {
  // Test proptypes
  describe('Checking PropTypes', () => {
    it('should`t throw a warning', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'Test description',
        postRequest: () => {},
        tempArr: [
          {
            firstName: 'Test Name',
            lastName: 'Test Surname',
            email: 'Test email',
            age: 15,
            onlineStatus: true,
          },
        ],
      };

      expect(propsError(Headline, expectedProps)).toBeUndefined();
    });
  });

  // Test render with props
  describe('Have props', () => {
    const props = {
      title: 'Test title',
      desc: 'Test desc',
    };

    checkElements(
      component(props),
      'should render without errors',
      'headlineComponent',
      1,
    );

    checkElements(component(props), 'should render title', 'header', 1);

    checkElements(component(props), 'should render description', 'desc', 1);
  });

  // Test render without props
  describe('No props', () => {
    checkElements(component(), 'should not render ', 'headlineComponent', 0);
  });
});
