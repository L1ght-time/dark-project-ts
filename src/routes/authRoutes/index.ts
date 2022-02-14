import { AuthRoutes, FormikRoutes } from '../../constants';
import { Dashboard, Formik } from '../../pages';
import { FieldFormikText } from '../../components/formik';

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
    path: `/${AuthRoutes.RoutePathFormik}`,
    exact: true,
    component: Formik,
  },

  {
    path: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`,
    exact: true,
    component: FieldFormikText,
  },

  {
    path: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`,
    exact: true,
    component: Formik,
  },
];

export const authPaths = authenticatedRoutes.map((route) => route.path);
