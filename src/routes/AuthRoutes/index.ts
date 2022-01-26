import { AuthRoutes } from '../../constants';
import { Dashboard } from '../../pages';

export const authenticatedRoutes = [
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

export const authPaths = authenticatedRoutes.map((route) => route.path);
