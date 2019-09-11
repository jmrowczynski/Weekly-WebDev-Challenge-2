import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import HeaderTemplate from 'components/templates/HeaderTemplate/HeaderTemplate';
import AboutTemplate from 'components/templates/AboutTemplate/AboutTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <HeaderTemplate />
          <AboutTemplate />
          <Switch>
            <Route exact path="/" />
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
            <Route path="/" />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  </>
);

export default Root;
