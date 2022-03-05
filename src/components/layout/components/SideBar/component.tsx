import React from 'react';
import { Box, Divider, Drawer, IconButton, List, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import useStyles from '../Header/styles';
import { DRAWER_WIDTH } from '../Header/constants';

import { listItemsModel } from './constants';
import { SideBarController } from './SideBarController';
import { ISideBarProps, TSideBarItemAny } from './types';

export function SideBar({ isOpen, onToggle }: ISideBarProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();

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
        <IconButton onClick={onToggle}>{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}</IconButton>
      </Box>
      <Divider />
      <List>
        {listItemsModel.map((item: TSideBarItemAny) => (
          <SideBarController key={item.label} {...item} />
        ))}
      </List>
    </Drawer>
  );
}
