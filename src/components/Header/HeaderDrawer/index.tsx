import React from 'react';
import { Box, Divider, Drawer, IconButton, List, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { DRAWER_WIDTH } from '../constants';
import useStyles from '../styles';

import { HeaderDrawerProps, ListItemsData } from './types';
import { listItemsModel } from './constants';
import { SideBarList } from './SideBarList';

function HeaderDrawer({ isOpen, setOpen }: HeaderDrawerProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerClose = () => setOpen(false);

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
          <SideBarList key={label} routes={routes} label={label} />
        ))}
      </List>
    </Drawer>
  );
}

export default HeaderDrawer;
