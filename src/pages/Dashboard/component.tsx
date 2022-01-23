import React, { FC } from 'react';

import Header from './Header';
import { DashboardProps } from './types';

export const Dashboard: FC<DashboardProps> = ({ isDarkMode, setDarkMode }) => (
  <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
);
