import React from 'react';
import { TextField } from '@mui/material';

import { IFieldFormikTextProps } from './types';

export function FieldFormikText({ field, ...props }: IFieldFormikTextProps): JSX.Element {
  return <TextField {...props} {...field} />;
}
