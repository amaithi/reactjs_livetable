import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview.js';
import Stars from './Stars.js';
import Clients from './Clients.js';
import Following from './Following.js';

const Main = () => (
  <div  style={{width:"80%",float:"left"}}>
    <Switch>
      <Route path='/Dashboard' component={Overview} />
      <Route path='/Clients' component={Clients} />
    </Switch>
  </div>
)

export default Main;