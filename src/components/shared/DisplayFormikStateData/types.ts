import { FormikValues } from 'formik';

export interface IProps {
  values: FormikValues;
  replacer?: (number | string)[] | null;
  space?: string | number;
}
