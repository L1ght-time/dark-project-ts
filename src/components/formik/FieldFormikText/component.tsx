import React from 'react';
import { TextField } from '@mui/material';

import { TFieldFormikTextProps } from './types';

export function FieldFormikText({ field, ...props }: TFieldFormikTextProps): JSX.Element {
  return <TextField {...props} {...field} />;
}
