import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Headline from '../../components/Headline';

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
  render() {
    return (
      <React.Fragment>
        <Header />
        <Headline
          title="Posts"
          desc="Click to render posts"
          tempArr={tempArr}
        />
      </React.Fragment>
    );
  }
}

// export default MainPage;

const mapStateToProps = state => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(MainPage);
