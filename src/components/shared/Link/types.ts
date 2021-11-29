import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode } from 'react';

export interface LinkProps {
  children: ReactNode;
  to: string;
  variant?: Variant;
}
