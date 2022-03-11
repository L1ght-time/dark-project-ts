import { MenuProps } from '@mui/material/Menu/Menu';

export interface IHeaderMenuProps extends MenuProps {
  menuId: string;
  onMenuClose: () => void;
}
