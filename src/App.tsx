import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard, NotFound, Profile } from './pages';
import { authPaths } from './routes/AuthRoutes';
import { Layout } from './components/layout/Layout';
import { nonAuthPaths } from './routes/NonAuthRoutes';
import { GuestLayout } from './components/layout/GuestLayout';
import { ForgotPassword, SignIn, SignUp } from './pages/auth';

const App = () => (
  <Router>
    <Switch>
      <Route path={authPaths}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </Layout>
      </Route>

      <Route path={nonAuthPaths}>
        <GuestLayout>
          <Switch>
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/forgot-password' component={ForgotPassword} />
            <Route exact path='/not-found' component={NotFound} />
          </Switch>
        </GuestLayout>
      </Route>
    </Switch>
  </Router>
);

export default App;
