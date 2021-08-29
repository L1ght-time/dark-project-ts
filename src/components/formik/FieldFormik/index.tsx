import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

import FieldFormikProps from './types';

const FieldFormik: FC<FieldFormikProps> = ({
  type = 'text',
  variant = 'outlined',
  autoComplete = 'off',
  className,
  label,
  name,
}) => (
  <TextField
    type={type}
    id={name}
    label={label}
    variant={variant}
    autoComplete={autoComplete}
    className={className}
  />
);

export default FieldFormik;
