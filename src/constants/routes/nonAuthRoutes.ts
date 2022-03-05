import { ForgotPassword, SignIn, SignUp } from 'pages/auth';
import { NotFound } from 'pages';

import { nonAuthenticatedRoutesModel } from './constants';

export const nonAuthRoutes = [
  {
    path: nonAuthenticatedRoutesModel.authorization.index,
    exact: true,
    component: SignIn,
  },
  {
    path: nonAuthenticatedRoutesModel.registration.index,
    exact: true,
    component: SignUp,
  },
  {
    path: nonAuthenticatedRoutesModel.forgotPassword,
    exact: true,
    component: ForgotPassword,
  },
  {
    path: nonAuthenticatedRoutesModel.utility.notFound,
    exact: true,
    component: NotFound,
  },
];
