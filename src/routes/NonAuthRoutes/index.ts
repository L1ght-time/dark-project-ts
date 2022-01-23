import { GuestRoutes } from '../../constants';
import { SignIn, SignUp, ForgotPassword } from '../../pages/auth';
import { NotFound } from '../../pages';

export const NonAuthRoutes = [
  {
    path: `/${GuestRoutes.RouteAuthorization}`,
    exact: true,
    component: SignIn,
  },

  {
    path: `/${GuestRoutes.RouteRegistration}`,
    exact: true,
    component: SignUp,
  },

  {
    path: `/${GuestRoutes.RouteForgotPassword}`,
    exact: true,
    component: ForgotPassword,
  },

  {
    path: `/${GuestRoutes.RouteNotFound}`,
    exact: true,
    component: NotFound,
  },
];

export const nonAuthPaths = NonAuthRoutes.map((route) => route.path);
