import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Container from '../components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giphy</h2>
        </div>
        <div>
          <Container/>  
        </div>
      </div>
    );
  }
}

export default App;
