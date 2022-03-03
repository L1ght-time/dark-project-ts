import { FieldArrayFormik, FieldFormikText } from 'components/formik';
import { Dashboard, Profile } from 'pages';

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
    component: FieldFormikText,
  },
  {
    path: authenticatedRoutesModel.formik.fieldArray,
    exact: true,
    component: FieldArrayFormik,
  },
];
