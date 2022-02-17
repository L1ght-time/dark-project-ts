import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Dashboard, NotFound, Profile } from './pages';
import { Layout } from './components/layout/Layout';
import { GuestLayout } from './components/layout/GuestLayout';
import { ForgotPassword, SignIn, SignUp } from './pages/auth';
import { FieldArrayFormik, FieldFormikText } from './components/formik';
import { AuthRoutes, FormikRoutes, GuestRoutes } from './constants';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={`/${AuthRoutes.RoutePathDashboard}`} component={Dashboard} />
          <Route exact path={`/${AuthRoutes.RoutePathProfile}`} component={Profile} />
          <Route exact path={`/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`} component={FieldFormikText} />
          <Route
            exact
            path={`/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`}
            component={FieldArrayFormik}
          />
        </Switch>
      </Layout>

      <GuestLayout>
        <Switch>
          <Route exact path={`/${GuestRoutes.RouteAuthorization}`} component={SignIn} />
          <Route exact path={`/${GuestRoutes.RouteRegistration}`} component={SignUp} />
          <Route exact path={`/${GuestRoutes.RouteForgotPassword}`} component={ForgotPassword} />
          <Route exact path={`/${GuestRoutes.RouteNotFound}`} component={NotFound} />
        </Switch>
      </GuestLayout>
    </Router>
  );
}

export default App;
