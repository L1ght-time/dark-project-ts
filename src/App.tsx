import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, NotFound, Profile } from './pages';
import { SignIn, SignUp } from './pages/auth';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/not-found' component={NotFound} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/sign-up' component={SignUp} />
    </Switch>
  </Router>
);

export default App;
