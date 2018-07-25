import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ToolBar />
      </div>
    );
  }
}

export default App;
