import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';
import HeaderTemplate from 'components/templates/HeaderTemplate/HeaderTemplate';
import AboutTemplate from 'components/templates/AboutTemplate/AboutTemplate';
import ServicesTemplate from 'components/templates/ServicesTemplate/ServicesTemplate';
import GalleryTemplate from 'components/templates/GalleryTemplate/GalleryTemplate';
import SubscribeTemplate from 'components/templates/SubscribeTemplate/SubscribeTemplate';
import BlogTemplate from 'components/templates/BlogTemplate/BlogTemplate';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <HeaderTemplate />
        <AboutTemplate />
        <ServicesTemplate />
        <GalleryTemplate />
        <SubscribeTemplate />
        <BlogTemplate />
      </>
    </ThemeProvider>
  </>
);

export default Root;
