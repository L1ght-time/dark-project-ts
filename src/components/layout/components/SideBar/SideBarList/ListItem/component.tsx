import { Box, Typography } from '@mui/material';
import React from 'react';

import MuiLink from '../../../../../shared/MuiLink';
import { RoutesData } from '../../types';

export function ListItem({ label, link }: RoutesData): JSX.Element {
  return (
    <Box component='li' sx={{ pl: 4, py: 1, display: 'block' }}>
      <Typography component={MuiLink} to={link} sx={{ display: 'flex' }} underline='none'>
        {label}
      </Typography>
    </Box>
  );
}
