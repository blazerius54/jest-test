import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

class Headline extends React.Component {
  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null;
    }

    return (
      <div className="headline-wrapper" data-test="headlineComponent">
        <h2 data-test="header">{title}</h2>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    }),
  ),
};

export default Headline;
