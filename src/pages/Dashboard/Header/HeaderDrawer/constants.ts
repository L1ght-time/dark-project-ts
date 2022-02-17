import { AuthRoutes, FormikRoutes } from '../../../../constants';

import { ListItemsFormikData } from './types';

export const listItemsFormikModel: ListItemsFormikData[] = [
  {
    itemText: 'Field',
    link: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteField}`,
  },
  {
    itemText: 'FieldArray',
    link: `/${AuthRoutes.RoutePathFormik}/${FormikRoutes.RouteFieldArray}`,
  },
];
