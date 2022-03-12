import { FieldArrayFormik } from 'components/formik';
import { Dashboard, Profile } from 'pages';
import { FieldPage } from 'pages/Field/component';

import { authenticatedRoutesModel } from './constants';

export const authenticatedRoutes = [
  {
    path: authenticatedRoutesModel.dashboard.index,
    exact: true,
    component: Dashboard,
  },
  {
    path: authenticatedRoutesModel.profile.index,
    exact: true,
    component: Profile,
  },
  {
    path: authenticatedRoutesModel.formik.field,
    exact: true,
    component: FieldPage,
  },
  {
    path: authenticatedRoutesModel.formik.fieldArray,
    exact: true,
    component: FieldArrayFormik,
  },
];
