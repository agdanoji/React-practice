import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {

  constructor(props){
    super(props);
    this.state={r:0};
  this.getrandnum=this.getrandnum.bind(this);

  }
  getrandnum(){
    this.setState({r: Math.floor(Math.random()*100)});
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Intro />
      <button onClick={this.getrandnum}> Random Numbers</button>
      <Numbers randnum= {this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component{

  componentWillMount(){
    console.log("componentWillMount called here");
  }



  render(){
    return(
    <div>
      <br/>
      {this.props.randnum}
    </div>
    );
  }
}

export default App;
