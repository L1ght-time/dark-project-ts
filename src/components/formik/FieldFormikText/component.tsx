import React from 'react';
import { TextField } from '@mui/material';

import FieldFormikProps from '../FieldFormik/types';

// interface IFieldFormikTextProps {
//   props: FieldFormikProps;
//   field: FieldProps;
// }

export function FieldFormikText({ ...props }: FieldFormikProps): JSX.Element {
  return <TextField {...props} />;
}
