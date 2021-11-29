import { MouseEvent } from 'react';

interface HeaderMobileMenuProps {
  mobileMenuId: string;
  mobileMoreAnchorEl: null | HTMLElement;
  isMobileMenuOpen: boolean;
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMobileMenuClose: () => void;
}

export default HeaderMobileMenuProps;
