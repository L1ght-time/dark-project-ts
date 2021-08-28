import { TextField } from '@material-ui/core';
import React, { FC } from 'react';

interface FieldFormikProps {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  variant?: 'standard' | 'filled' | 'outlined';
}

const FieldFormik: FC<FieldFormikProps> = ({
  type = 'text',
  variant = 'outlined',
  autoComplete = 'off',
  label,
  name,
}) => {
  return (
    <TextField
      id={name}
      type={type}
      label={label}
      variant={variant}
      autoComplete={autoComplete}
    />
  );
};

export default FieldFormik;
