import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { theme } from '../../../theme/theme';

storiesOf('Button', module)
  .add('primary', () => <Button>get free now</Button>)
  .add('secondary', () => <Button color={theme.secondary}>view more</Button>)
  .add('tertiary', () => <Button color={theme.tertiary}>view more</Button>);
