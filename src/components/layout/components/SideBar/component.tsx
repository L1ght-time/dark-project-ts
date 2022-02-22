import React from 'react';
import { Box, Divider, Drawer, IconButton, List, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import useStyles from '../Header/styles';
import { DRAWER_WIDTH } from '../Header/constants';

import { listItemsModel } from './constants';
import { ListItemsData, SideBarProps } from './types';
import { SideBarList } from './SideBarList';

export function SideBar({ isOpen, setOpen }: SideBarProps): JSX.Element {
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
