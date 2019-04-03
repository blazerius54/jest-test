import React from 'react';
import PropTypes from 'prop-types';

const SinglePost = ({ title, desc }) =>
  title ? (
    <div data-test="postWrapper">
      <h3 data-test="postTitle">{title}</h3>
      <p data-test="postDesc">{desc}</p>
    </div>
  ) : null;

SinglePost.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default SinglePost;
