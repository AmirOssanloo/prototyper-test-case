import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import ResetCSS from './style/reset';
import GlobalCSS from './style/global';
import * as theme from './style/theme';
import App from './containers/App'

const app = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <GlobalCSS />
      <BrowserRouter basename={'/'}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

render(app, document.querySelector('#app-root'));
