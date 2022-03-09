import { MouseEvent, useContext, useState } from 'react';
import { AppBar, Badge, Box, IconButton, TextField, Toolbar } from '@mui/material';
import {
  AccountCircle,
  Brightness3,
  Brightness4,
  Mail as MailIcon,
  Menu as MenuIcon,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import classnames from 'classnames';
import { CustomThemeContext } from 'theme/CustomThemeProvider';

import useStyles from './styles';
import { HeaderMenu } from './HeaderMenu';
import { MENU_ID, MOBILE_MENU_ID } from './constants';
import { IHeaderProps } from './types';
import { HeaderMobileMenu } from './HeaderMobileMenu';

export function Header({ isSideBar, onToggle }: IHeaderProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  const isDark = currentTheme === 'dark';
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleThemeChange = () => setTheme(isDark ? 'light' : 'dark');

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        className={classnames(classes.root, { [classes.offsetAppBar]: isSideBar, [classes.fullAppBar]: !isSideBar })}
      >
        <Toolbar>
          {!isSideBar && (
            <IconButton color='inherit' onClick={onToggle} edge='start' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box className={classes.search}>
            <Box className={classes.searchIconWrapper}>
              <SearchIcon />
            </Box>

            <TextField placeholder='Search…' inputProps={{ 'aria-label': 'search' }} className={classes.searchField} />
          </Box>
          <IconButton sx={{ ml: 1 }} color='inherit' onClick={handleThemeChange}>
            {isDark ? <Brightness3 /> : <Brightness4 />}
          </IconButton>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size='large' color='inherit'>
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size='large' edge='end' onClick={handleProfileMenuOpen} color='inherit'>
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' onClick={handleMobileMenuOpen} color='inherit'>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <HeaderMobileMenu
          mobileMenuId={MOBILE_MENU_ID}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          open={isMobileMenuOpen}
          onProfileMenuOpen={handleProfileMenuOpen}
          onMobileMenuClose={handleMobileMenuClose}
        />

        <HeaderMenu menuId={MENU_ID} anchorEl={anchorEl} open={isMenuOpen} onMenuClose={handleMenuClose} />
      </AppBar>
    </Box>
  );
}
