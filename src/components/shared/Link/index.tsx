import React, { FC } from 'react';
import { Link as MaterialLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './types';

const Link: FC<LinkProps> = ({ children, to = '/', variant = 'body2' }) => (
  <MaterialLink component={RouterLink} to={to} variant={variant}>
    {children}
  </MaterialLink>
);

export default Link;
