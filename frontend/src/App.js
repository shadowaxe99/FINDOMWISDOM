import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import Profile from './components/Profile';
import Matchmaking from './components/Matchmaking';
import Communication from './components/Communication';
import Transaction from './components/Transaction';
import TaskManagement from './components/TaskManagement';
import Community from './components/Community';
import Reporting from './components/Reporting';
import ResponsiveDesign from './components/ResponsiveDesign';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/matchmaking" component={Matchmaking} />
          <Route path="/communication" component={Communication} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/task-management" component={TaskManagement} />
          <Route path="/community" component={Community} />
          <Route path="/reporting" component={Reporting} />
          <Route path="/" component={ResponsiveDesign} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;