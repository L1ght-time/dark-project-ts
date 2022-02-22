import React from 'react';
import { ListItemButton } from '@mui/material';

import MuiLink from '../../../shared/MuiLink';
import { RoutesData } from '../../types';

export function ListItem({ label, link }: RoutesData): JSX.Element {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <MuiLink to={link} underline='none'>
        {label}
      </MuiLink>
    </ListItemButton>
  );
}
