import React from 'react';
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
export default Headline;
