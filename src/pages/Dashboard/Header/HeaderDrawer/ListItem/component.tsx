import React from 'react';
import { ListItemButton } from '@mui/material';

import { ListItemData } from './types';

export function ListItem({ children, handleFormik }: ListItemData): JSX.Element {
  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleFormik}>
      {children}
    </ListItemButton>
  );
}
