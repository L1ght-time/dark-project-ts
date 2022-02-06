import React, { FC } from 'react';
import { AccountCircle, Mail, Notifications } from '@mui/icons-material';
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';

import HeaderMobileMenuProps from './types';

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({
  mobileMenuId,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleProfileMenuOpen,
  handleMobileMenuClose,
}) => (
  <Menu
    id={mobileMenuId}
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
        <Badge badgeContent={4} color='error'>
          <Mail />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
        <Badge badgeContent={17} color='error'>
          <Notifications />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='primary-search-account-menu'
        aria-haspopup='true'
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

export default HeaderMobileMenu;
