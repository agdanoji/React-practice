import React, { Component } from 'react';
import survey from './survey.svg';
import './App.css';
import Survey1 from './Survey1';
//import Usurvey from './Usurvey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={survey} className="App-logo" alt="logo" />
        </header>
        <Survey1/>
      </div>
    );
  }
}

export default App;
