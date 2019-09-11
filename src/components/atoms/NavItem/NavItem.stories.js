import React from 'react';
import { storiesOf } from '@storybook/react';
import NavItem from './NavItem';

storiesOf('NavItem', module)
  .add('home', () => <NavItem>home</NavItem>)
  .add('about', () => <NavItem>about</NavItem>)
  .add('services', () => <NavItem>services</NavItem>)
  .add('gallery', () => <NavItem>gallery</NavItem>)
  .add('blog', () => <NavItem>blog</NavItem>)
  .add('contact', () => <NavItem>contact</NavItem>);
