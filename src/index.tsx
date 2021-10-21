import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';

const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
