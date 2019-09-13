import React from 'react';
import { storiesOf } from '@storybook/react';
import shopIcon from 'assets/icons/icon.svg';
import Card from './Card';

storiesOf('Card', module).add('home', () => <Card icon={shopIcon}>Online Shopping</Card>);
