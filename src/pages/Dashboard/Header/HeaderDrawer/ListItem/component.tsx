import React from 'react';
import { ListItemButton } from '@mui/material';

import MuiLink from '../../../../../components/shared/MuiLink';

import { ListItemProps } from './types';

export function ListItem({ label, link, isListItemOpen, setListItemOpen }: ListItemProps) {
  const handleSwitch = () => {
    setListItemOpen(!isListItemOpen);
  };

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleSwitch}>
      <MuiLink to={link}>{label}</MuiLink>
    </ListItemButton>
  );
}
