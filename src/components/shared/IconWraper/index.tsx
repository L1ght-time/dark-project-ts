import React, { FC } from 'react';

import { IconWraperProps } from './types';

/* TODO: added solve with theaming for color through props */

const IconWraper: FC<IconWraperProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default IconWraper;
