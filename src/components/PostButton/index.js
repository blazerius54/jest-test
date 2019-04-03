import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PostButton = ({ buttonText, func }) => (
  <button onClick={func} className="post-btn" data-test="postButton">
    {buttonText}
  </button>
);

PostButton.propTypes = {
  func: PropTypes.func,
  buttonText: PropTypes.string,
};

export default PostButton;
