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
import { useHistory } from 'react-router-dom';

import { DRAWER_WIDTH, LIST_SIDE_BAR } from '../constants';
import useStyles from '../styles';

import { HeaderDrawerProps, ListItemsFormikData } from './types';
import { ListItem } from './ListItem';
import { listItemsFormikModel } from './constants';

function HeaderDrawer({ isOpen, setOpen }: HeaderDrawerProps): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [openListItem, setOpenListItem] = useState<boolean>(false);

  const handleDrawerClose = () => setOpen(false);

  const handleClick = () => {
    setOpenListItem(!openListItem);
  };

  const handleFormik = (link: string) => {
    history.push(link);
  };

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
        {LIST_SIDE_BAR.map((text) => (
          <List key={text} component='div' disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={text} />
              {openListItem ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openListItem} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {listItemsFormikModel.map(({ itemText, link }: ListItemsFormikData) => (
                  <ListItem key={itemText} handleFormik={() => handleFormik(link)}>
                    {itemText}
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        ))}
      </List>
    </Drawer>
  );
}

export default HeaderDrawer;
