import React from 'react';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signUp" component={Signup} />
      </Switch>
    </Router>
    
  );
}

export default App;
