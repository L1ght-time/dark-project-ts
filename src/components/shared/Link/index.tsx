import React from 'react';
import { Link as MaterialLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './types';

function Link({ children, to = '/', variant = 'body2' }: LinkProps) {
  return (
    <MaterialLink component={RouterLink} to={to} variant={variant}>
      {children}
    </MaterialLink>
  );
}

export default Link;
