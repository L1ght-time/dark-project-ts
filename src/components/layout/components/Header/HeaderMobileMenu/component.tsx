import { AccountCircle, Mail, Notifications } from '@mui/icons-material';
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';

import { ORIGIN } from '../constants';

import { IHeaderMobileMenuProps } from './types';

export function HeaderMobileMenu({
  open,
  mobileMenuId,
  mobileMoreAnchorEl,
  onProfileMenuOpen,
  onMobileMenuClose,
}: IHeaderMobileMenuProps): JSX.Element {
  return (
    <Menu
      id={mobileMenuId}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={ORIGIN}
      keepMounted
      transformOrigin={ORIGIN}
      open={open}
      onClose={onMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='large' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' color='inherit'>
          <Badge badgeContent={17} color='error'>
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={onProfileMenuOpen}>
        <IconButton size='large' color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}

export default HeaderMobileMenu;
