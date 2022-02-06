import React, { FC } from 'react';
import { Box } from '@mui/material';

import { IconWraperProps } from './types';

export const IconWrapper: FC<IconWraperProps> = ({ children, className }) => (
  <Box className={className}>{children}</Box>
);
