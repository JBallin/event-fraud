import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar'

class App extends Component {

  state = {
    selected: 'all'
  }

  render() {
    return (
      <div className='container'>
        <ToolBar selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
