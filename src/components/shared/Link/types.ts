import { Variant } from '@material-ui/core/styles/createTypography';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  to: string;
  variant?: Variant;
}

export default LinkProps;
