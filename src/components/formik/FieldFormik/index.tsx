import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

import FieldFormikProps from './types';

const FieldFormik: FC<FieldFormikProps> = ({
  type = 'text',
  variant = 'outlined',
  autoComplete = 'off',
  className = 'w-100 mb-4 pb-1',
  label,
  name,
}) => (
  <TextField
    id={name}
    type={type}
    label={label}
    variant={variant}
    autoComplete={autoComplete}
    className={className}
  />
);

export default FieldFormik;
