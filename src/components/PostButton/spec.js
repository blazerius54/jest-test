import React from 'react';
import { shallow } from 'enzyme';
import PostButton from './index';
import { findElement, checkElements, propsError } from '../../utils';

let mockFunc = jest.fn();
const component = props => shallow(<PostButton {...props} />);
const props = {
  buttonText: 'Example Button Text',
  func: mockFunc,
};
describe('PostButton components', () => {
  describe('Check PropTypes', () => {
    it('should`t throw a warning', () => {
      expect(propsError(PostButton, props)).toBeUndefined();
    });
  });

  describe('Render', () => {
    checkElements(
      component(props),
      'Should render without errors',
      'postButton',
      1,
    );

    it('Should emit callback on click event', () => {
      const button = findElement(component(props), 'postButton');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    })
  });
});
