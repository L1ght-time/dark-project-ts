import React, { FC } from 'react';

import { IconWraperProps } from './types';

/* TODO: added solve with theaming for color through props */

const IconWrapper: FC<IconWraperProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default IconWrapper;
