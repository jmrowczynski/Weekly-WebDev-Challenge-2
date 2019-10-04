import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('primary', () => <Input placeholder="Your email address..." />)
  .add('secondary', () => <Input secondary color="form" placeholder="Auskteez Tran" />);
