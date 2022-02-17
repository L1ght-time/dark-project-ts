import React, { useState } from 'react';
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';

import { DRAWER_WIDTH } from '../constants';
import useStyles from '../styles';

import { HeaderDrawerProps, ListItemsData, RoutesData } from './types';
import { listItemsModel } from './constants';
import { ListItem } from './ListItem';

function HeaderDrawer({ isOpen, setOpen }: HeaderDrawerProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [openListItem, setOpenListItem] = useState<boolean>(false);

  const handleDrawerClose = () => setOpen(false);

  const handleClick = () => {
    setOpenListItem((prevState) => !prevState);
  };

  const [isListItemOpen, setListItemOpen] = useState<boolean>(false);

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant='persistent'
      anchor='left'
      open={isOpen}
      className={classes.drawer}
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {listItemsModel.map(({ label, routes }: ListItemsData) => (
          <List key={label} component='div' disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={label} />
              {openListItem ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={isListItemOpen} timeout='auto' unmountOnExit>
              {routes.map((props: RoutesData) => (
                <ListItem
                  key={props.label}
                  isListItemOpen={isListItemOpen}
                  setListItemOpen={setListItemOpen}
                  {...props}
                />
              ))}
            </Collapse>
          </List>
        ))}
      </List>
    </Drawer>
  );
}

export default HeaderDrawer;
