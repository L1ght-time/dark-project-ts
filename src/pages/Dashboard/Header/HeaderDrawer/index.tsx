import React from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { DRAWER_WIDTH, LIST_SIDE_BAR } from '../constants';
import useStyles from '../styles';
import { AuthRoutes } from '../../../../constants';
import Link from '../../../../components/shared/Link';

import { HeaderDrawerProps } from './types';

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
        {LIST_SIDE_BAR.map((text, index: number) => (
          <ListItem button key={text}>
            <Link to={`/${Object.keys(AuthRoutes)[index]}`}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default HeaderDrawer;
