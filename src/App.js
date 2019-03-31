import React, { Component } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';

class App extends Component {
  render() {
    return (
      <div className="App-Wrapper">
        <Header />
        <Headline title="Posts" desc="Click to render posts"/>
      </div>
    );
  }
}

export default App;
