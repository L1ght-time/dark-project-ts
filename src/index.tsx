import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/styled-engine';

import './index.css';
import App from './App';
import { CustomThemeProvider } from './theme/CustomThemeProvider';

const app = (
  <StrictMode>
    <CustomThemeProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </CustomThemeProvider>
  </StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
