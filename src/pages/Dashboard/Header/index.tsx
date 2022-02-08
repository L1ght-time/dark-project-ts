import React, { MouseEvent, useContext, useState } from 'react';
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

import { CustomThemeContext } from '../../../theme/CustomThemeProvider';

import useStyles from './styles';
import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderDrawer from './HeaderDrawer';
import { MENU_ID, MOBILE_MENU_ID } from './constants';

function Header(): JSX.Element {
  const classes = useStyles();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = currentTheme === 'dark';

  const handleDrawerOpen = () => setOpen(true);

  const handleThemeChange = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' className={classnames(classes.root, isOpen ? classes.offsetAppBar : classes.fullAppBar)}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
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
            <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={MENU_ID}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={MOBILE_MENU_ID}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <HeaderMobileMenu
          mobileMenuId={MOBILE_MENU_ID}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMobileMenuOpen={isMobileMenuOpen}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
        />

        <HeaderMenu menuId={MENU_ID} anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
      </AppBar>

      <HeaderDrawer isOpen={isOpen} setOpen={setOpen} />
    </Box>
  );
}

export default Header;
