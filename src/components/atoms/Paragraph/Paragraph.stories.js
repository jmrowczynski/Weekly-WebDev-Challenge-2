import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraph', module).add('paragraph', () => (
  <Paragraph>lorem ipsum dolor sit amet</Paragraph>
));
