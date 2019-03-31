import React, { Component } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';

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

class App extends Component {
  render() {
    return (
      <div className="App-Wrapper">
        <Header />
        <Headline
          title="Posts"
          desc="Click to render posts"
          tempArr={tempArr}
        />
      </div>
    );
  }
}

export default App;
