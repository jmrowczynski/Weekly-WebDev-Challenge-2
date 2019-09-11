import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Nav from './Nav';

storiesOf('Nav', module)
  .addDecorator(StoryRouter())
  .add('Nav', () => <Nav />);
