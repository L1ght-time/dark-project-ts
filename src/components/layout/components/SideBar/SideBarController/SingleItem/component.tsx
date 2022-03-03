import { ListItemButton, Typography } from '@mui/material';
import React from 'react';
import MuiLink from 'components/shared/MuiLink';

import { ISingleItemProps } from '../../types';

export function SingleItem({ label, url, isNested }: ISingleItemProps): JSX.Element {
  return (
    <ListItemButton component='li' sx={{ pl: isNested ? 4 : 2, display: 'block' }}>
      <Typography
        component={MuiLink}
        color='white'
        to={url}
        sx={{ display: 'flex' }}
        variant={isNested ? 'body2' : 'body1'}
        underline='none'
      >
        {label}
      </Typography>
    </ListItemButton>
  );
}
