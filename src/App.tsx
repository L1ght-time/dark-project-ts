import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => (
  <>
    <Route exact path='/' component={Home} />
    <Route exact path='/not-found' component={NotFound} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/sign-in' component={SignIn} />
    <Route exact path='/sign-up' component={SignUp} />
  </>
);

export default App;
