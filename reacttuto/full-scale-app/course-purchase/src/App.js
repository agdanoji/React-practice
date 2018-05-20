import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesale from './Coursesale';

class App extends Component {
  render() {
    var courses =[
      {name: 'Complete i0S10 dev course',price: 199},
      {name: 'Complete pentesting course',price: 190},
      {name: 'Complete front end dev course',price: 198},
      {name: 'Complete bugtesting course',price: 189},
      {name: 'Complete react dev course',price: 179}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase</h1>
        </header>
        <Coursesale items={courses}/>
      </div>
    );
  }
}

export default App;
