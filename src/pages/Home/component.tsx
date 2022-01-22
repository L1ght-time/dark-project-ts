import React, { FC } from 'react';

import Header from './Header';
import { HomeProps } from './types';

export const Home: FC<HomeProps> = ({ isDarkMode, setDarkMode }) => (
  <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
);
