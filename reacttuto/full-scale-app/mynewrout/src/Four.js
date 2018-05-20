import React,{Component} from 'react';
import {Link} from 'react-router';

class Four extends Component{
  render(){
    return(
    <div>
      Hey there , I am from Four.
      <ul>
          <li><Link to="/Four/123">Fourone</Link></li>
      </ul>
      {this.props.children}
    </div>
    );
  }
}

export default Four;
