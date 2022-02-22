import React from 'react';
import { Link as MaterialLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { ILinkProps } from './types';

function MuiLink({ children, to = '/', underline = 'always', ...props }: ILinkProps): JSX.Element {
  return (
    <MaterialLink component={RouterLink} to={to} underline={underline} {...props}>
      {children}
    </MaterialLink>
  );
}

export default MuiLink;
