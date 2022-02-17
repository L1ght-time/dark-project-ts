import React from 'react';
import { Link as MaterialLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './types';

function MuiLink({ children, to = '/', ...props }: LinkProps): JSX.Element {
  return (
    <MaterialLink component={RouterLink} to={to} {...props}>
      {children}
    </MaterialLink>
  );
}

export default MuiLink;
