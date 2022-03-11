import { Box } from '@mui/material';

import { IIconWrapperProps } from './types';

export function IconWrapper({ children, className }: IIconWrapperProps): JSX.Element {
  return <Box className={className}>{children}</Box>;
}
