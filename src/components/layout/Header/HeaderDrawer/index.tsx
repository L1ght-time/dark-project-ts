import React, { FC } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MoveToInbox,
} from '@mui/icons-material';

import { DRAWER_WIDTH, LIST_SIDE_BAR } from '../constants';
import useStyles from '../styles';

interface HeaderDrawerProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

const HeaderDrawer: FC<HeaderDrawerProps> = ({ isOpen, setOpen }) => {
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
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {LIST_SIDE_BAR.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
