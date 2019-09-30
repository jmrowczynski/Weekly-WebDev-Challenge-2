import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module).add('input', () => <Input placeholder="Your email address..." />);
