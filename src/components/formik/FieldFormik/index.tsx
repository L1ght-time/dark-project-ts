import React from 'react';
import { TextField } from '@mui/material';

import FieldFormikProps from './types';

function FieldFormik({
  className,
  label,
  name,
  type = 'text',
  variant = 'outlined',
  autoComplete = 'off',
}: FieldFormikProps) {
  return (
    <TextField
      type={type}
      id={name}
      label={label}
      variant={variant}
      autoComplete={autoComplete}
      className={className}
    />
  );
}

export default FieldFormik;
