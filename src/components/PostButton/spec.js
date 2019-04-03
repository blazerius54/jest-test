import React from 'react';
import { shallow } from 'enzyme';
import PostButton from './index';
import { checkElemetnts, propsError } from '../../utils';

const component = props => shallow(<PostButton {...props} />);
const props = {
  buttonText: 'Example Button Text',
  func: () => {},
};
describe('PostButton components', () => {
  describe('Check PropTypes', () => {
    it('should`t throw a warning', () => {
      expect(propsError(PostButton, props)).toBeUndefined();
    });
  });

  describe('Render', () => {
    checkElemetnts(
      component(props),
      'Should render without errors',
      'postButton',
      1,
    );
  });
});
