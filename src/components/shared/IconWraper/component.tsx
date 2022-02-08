import React from 'react';
import { Box } from '@mui/material';

import { IconWraperProps } from './types';

export function IconWrapper({ children, className }: IconWraperProps) {
  return <Box className={className}>{children}</Box>;
}
