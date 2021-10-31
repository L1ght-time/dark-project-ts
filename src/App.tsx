import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';
import StorageService from './services/StorageService';

const App = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setDarkMode(JSON.parse(StorageService.get('darkmode') as string));
  }, []);

  useEffect(() => {
    StorageService.set('darkmode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const theme = createTheme(isDarkMode ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            )}
          />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
