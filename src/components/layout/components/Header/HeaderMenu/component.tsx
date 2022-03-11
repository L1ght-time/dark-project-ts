import { Menu, MenuItem } from '@mui/material';

import { ORIGIN } from '../constants';

import { IHeaderMenuProps } from './types';

export function HeaderMenu({ menuId, anchorEl, open, onMenuClose }: IHeaderMenuProps): JSX.Element {
  return (
    <Menu
      keepMounted
      id={menuId}
      anchorEl={anchorEl}
      anchorOrigin={ORIGIN}
      transformOrigin={ORIGIN}
      open={open}
      onClose={onMenuClose}
    >
      <MenuItem onClick={onMenuClose}>Profile</MenuItem>
      <MenuItem onClick={onMenuClose}>My account</MenuItem>
    </Menu>
  );
}
