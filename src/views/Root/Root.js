import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';
import HeaderTemplate from 'components/templates/HeaderTemplate/HeaderTemplate';
import AboutTemplate from 'components/templates/AboutTemplate/AboutTemplate';
import ServicesTemplate from 'components/templates/ServicesTemplate/ServicesTemplate';
import GalleryTemplate from 'components/templates/GalleryTemplate/GalleryTemplate';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <HeaderTemplate id="home" />
        <AboutTemplate id="about" />
        <ServicesTemplate />
        <GalleryTemplate />
      </>
    </ThemeProvider>
  </>
);

export default Root;
