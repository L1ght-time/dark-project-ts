import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authenticatedRoutes } from 'constants/routes/authRoutes';
import { nonAuthRoutes } from 'constants/routes/nonAuthRoutes';
import { Layout } from 'components/layout/Layout';
import { GuestLayout } from 'components/layout/GuestLayout';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          {authenticatedRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Layout>

      <GuestLayout>
        <Switch>
          {nonAuthRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </GuestLayout>
    </Router>
  );
}

export default App;
