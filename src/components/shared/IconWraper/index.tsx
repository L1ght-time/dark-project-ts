import React, { FC } from 'react';

import IconWraperProps from './types';

const IconWraper: FC<IconWraperProps> = ({ children, className, bg }) => (
  <div className={className} style={{ backgroundColor: bg }}>
    {children}
  </div>
);

export default IconWraper;
