import { ReactNode } from 'react';
import { LinkProps } from '@mui/material';

type UnderlineType = 'always' | 'hover' | 'none';

export interface ILinkProps {
  children: ReactNode;
  to: string;
  underline?: UnderlineType;
  props?: LinkProps;
}
