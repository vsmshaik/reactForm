import React from 'react';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Testfile from './components/Testfile';
import MediaCard from './components/MediaCard';
import SpacingGrid from './components/SpacingGrid';
import More from './components/More';
import CustomizedTables from './components/CustomizedTables';
import  Tables  from '@material-ui/core/Table';
import EnhancedTable from './components/EnhancedTable';
import Dummy from './components/Dummy';
import Counter from './components/Counter';
import ExternalAPI from './context/ExternalAPI';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signUp" component={Signup} />
        <Route exact path="/users" component={Testfile} />
        <Route exact path="/table" component={CustomizedTables} />
        <Route exact path="/tables" component={Dummy} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/extApi" component={ExternalAPI} />
      </Switch>
    </Router>
  );
}

export default App;
