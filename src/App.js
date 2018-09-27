import React, { Component } from 'react';
import './App.css';

import GetUserContainer from './containers/GetUserContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetUserContainer />
      </div>
    );
  }
}

export default App;
