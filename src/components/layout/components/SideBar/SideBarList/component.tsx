import React, { useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { ListItemsData, RoutesData } from '../types';

import { ListItem } from './ListItem';

export function SideBarList({ label, routes }: ListItemsData): JSX.Element {
  const [openListItem, setOpenListItem] = useState<boolean>(false);

  const handleClick = () => {
    setOpenListItem((prevState) => !prevState);
  };
  return (
    <List key={label} component='div' disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={label} />
        {openListItem ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openListItem} timeout='auto' unmountOnExit>
        <List disablePadding>
          {routes?.map((props: RoutesData) => (
            <ListItem key={props.label} {...props} />
          ))}
        </List>
      </Collapse>
    </List>
  );
}
