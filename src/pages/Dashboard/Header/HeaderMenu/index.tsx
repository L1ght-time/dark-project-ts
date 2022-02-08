import React from 'react';
import { Menu, MenuItem } from '@mui/material';

import HeaderMenuProps from './types';

function HeaderMenu({ menuId, anchorEl, isMenuOpen, handleMenuClose }: HeaderMenuProps) {
  return (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}

export default HeaderMenu;
