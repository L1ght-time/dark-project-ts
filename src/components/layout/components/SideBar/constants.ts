import { authenticatedRoutesModel } from 'constants/routes/constants';

import { TSideBarItemAny } from './types';

export const listItemsModel: TSideBarItemAny[] = [
  {
    label: 'Home',
    url: authenticatedRoutesModel.dashboard.index,
  },
  {
    label: 'Formik',
    routes: [
      {
        label: 'Field',
        url: authenticatedRoutesModel.formik.field,
      },
      {
        label: 'FieldArray',
        url: authenticatedRoutesModel.formik.fieldArray,
      },
    ],
  },
  {
    label: 'Formik-2',
    routes: [
      {
        label: 'Field1',
        url: authenticatedRoutesModel.formik.field,
      },
      {
        label: 'FieldArray1',
        url: authenticatedRoutesModel.formik.fieldArray,
      },
    ],
  },
];
