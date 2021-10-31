import React, { FC } from 'react';

import Header from '../../components/layout/Header';

interface HomeProps {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Home: FC<HomeProps> = ({ isDarkMode, setDarkMode }) => (
  <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
);

export default Home;
