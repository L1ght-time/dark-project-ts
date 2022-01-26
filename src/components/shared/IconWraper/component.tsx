import React, { FC } from 'react';

import { IconWraperProps } from './types';
import { Box } from '@mui/material';

export const IconWrapper: FC<IconWraperProps> = ({ children, className }) => (
  <Box className={className}>{children}</Box>
);
