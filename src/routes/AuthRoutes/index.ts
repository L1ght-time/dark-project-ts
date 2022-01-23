import { AuthRoutes } from '../../constants';
import { Dashboard } from '../../pages';

export const AuthenticatedRoutes = [
  {
    path: `/${AuthRoutes.RoutePathDashboard}`,
    exact: true,
    component: Dashboard,
  },

  {
    path: `/${AuthRoutes.RoutePathProfile}`,
    exact: true,
    component: Dashboard,
  },
];

export const authPaths = AuthenticatedRoutes.map((route) => route.path);
