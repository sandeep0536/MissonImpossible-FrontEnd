import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import store from './Redux-toolkit/store';
import 'path-browserify';
import 'os-browserify/browser';
import 'crypto-browserify';




import Routes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <Routes />
    </StyledEngineProvider>
  </Provider>
);

