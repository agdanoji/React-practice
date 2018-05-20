import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from'./One';
import Two from'./Two';
import Three from'./Three';
import Four from'./Four';
import Fourone from'./Fourone';
import NoMatch from'./NoMatch';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route, browserHistory } from 'react-router';

ReactDOM.render(<Router history ={browserHistory}>
  <Route path="/" component={App}/>
  <Route path="/One" component={One}/>
  <Route path="/Two" component={Two}/>
  <Route path="/Three" component={Three}/>
  <Route path="/Four" component={Four}>
    <Route path="/Four/:id" component={Fourone}/>
  </Route>
  <Route path="*" component={NoMatch}/>

</Router>, document.getElementById('root'));
registerServiceWorker();
