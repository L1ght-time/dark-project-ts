import React, { FC } from 'react';
import { Menu, MenuItem } from '@mui/material';
import HeaderMenuProps from './types';

const HeaderMenu: FC<HeaderMenuProps> = ({
  menuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {
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
};

export default HeaderMenu;
