import React, { FC } from 'react';
import { Link as LinkMatirial } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import LinkProps from './types';

const Link: FC<LinkProps> = ({ children, to = '/', variant = 'body2' }) => (
  <LinkMatirial component={RouterLink} to={to} variant={variant}>
    {children}
  </LinkMatirial>
);

export default Link;
