import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './components/styles/theme';
import { ThemeProvider } from '@emotion/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);


