import { AuthRoutes, FormikRoutes } from '../../constants';

import { ListItemsData } from './types';

export const listItemsModel: ListItemsData[] = [
  {
    label: 'Formik',
    routes: [
      {
        label: 'Field',
        link: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`,
      },
      {
        label: 'FieldArray',
        link: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`,
      },
    ],
  },
  {
    label: 'regerg',
    routes: [
      {
        label: 'Field1',
        link: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`,
      },
      {
        label: 'FieldArray1',
        link: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`,
      },
    ],
  },
];
