import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CustomThemeProvider as Provider } from './theme/CustomThemeProvider';

const app = (
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
