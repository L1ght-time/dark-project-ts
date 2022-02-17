import { AuthRoutes, FormikRoutes } from '../../constants';
import { Dashboard } from '../../pages';
import { FieldArrayFormik, FieldFormikText } from '../../components/formik';

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
  {
    path: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`,
    exact: true,
    component: FieldFormikText,
  },
  {
    path: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`,
    exact: true,
    component: FieldArrayFormik,
  },
];

export const authPaths = authenticatedRoutes.map((route) => route.path);
