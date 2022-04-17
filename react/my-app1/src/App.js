import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card';
import Data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import React_boot from './component/bootstap/React_boot';
import State from './component/pstate/State';
import Ajax from './component/eventajax/Ajax';
import Loge from './component/Login/Logine';
import Dashboard from './component/Login/Dashboard';
import List from './component/Croud/List';
import Add from './component/Croud/Add';
import Edit from './component/Croud/Edit';
import Delete from './component/Croud/Delete';
import Logout from './component/Login/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import axios from 'axios';

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}

axios.defaults.headers.common["Authorization"] = token;

function App(){
  
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Router>
        
        <Switch>
          <Route exact path="/List">
            <List />
          </Route>
          <Route exact path="/Add">
            <Add />
          </Route>
          <Route exact path="/Ajax">
            <Ajax />
          </Route>
          <Route exact path="/Edit/:pid">
            <Edit />
          </Route>
          <Route exact path="/Delete/:pid">
            <Delete />
          </Route>
          <Route exact path="/">
            <Loge />
          </Route>
          <Route exact path="/Logout">
            <Logout />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          
        </Switch>
  
  
        
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

export default App;
