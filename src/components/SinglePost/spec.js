import React from 'react';
import { shallow } from 'enzyme';
import SinglePost from './index';
import { checkElements, propsError } from '../../utils';

const component = props => shallow(<SinglePost {...props} />);
const props = {
  title: 'Test title',
  desc: 'Test desc',
};

describe('Single Post component', () => {
  describe('Check PropTypes', () => {
    it('should`t throw a warning', () => {
      expect(propsError(component, props)).toBeUndefined();
    });
  });

  describe('Render', () => {
    checkElements(
      component(props),
      'Should render post`s wrapper',
      'postWrapper',
      1,
    );
    checkElements(
      component(props),
      'Should render post`s title',
      'postTitle',
      1,
    );
    checkElements(
      component(props),
      'Should render post`s description post',
      'postDesc',
      1,
    );
  });

  describe('No render without props', () => {
    checkElements(
      component(),
      'Should`t render post`s wrapper',
      'postWrapper',
      0,
    );
  });
});
