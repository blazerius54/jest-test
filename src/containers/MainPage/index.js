import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Headline from '../../components/Headline';
import SinglePost from "../../components/SinglePost";

// Const for testing proptypes
const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true,
  },
];

class MainPage extends Component {
  postRequest = () => {
    console.log('send request');
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Headline
          title="Posts"
          desc="Click to render posts"
          tempArr={tempArr}
          postRequest={this.postRequest}
        />
        <SinglePost title="title" desc="desc" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(MainPage);
