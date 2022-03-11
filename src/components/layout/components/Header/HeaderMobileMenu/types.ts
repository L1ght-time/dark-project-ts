import { MouseEvent } from 'react';
import { MenuProps } from '@mui/material/Menu/Menu';

export interface IHeaderMobileMenuProps extends MenuProps {
  mobileMenuId: string;
  mobileMoreAnchorEl: null | HTMLElement;
  onProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  onMobileMenuClose: () => void;
}
