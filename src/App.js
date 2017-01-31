import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorktimeTracker from './containers/WorktimeTrackerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Test App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WorktimeTracker />
      </div>
    );
  }
}

export default App;
