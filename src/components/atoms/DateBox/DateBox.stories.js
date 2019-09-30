import React from 'react';
import { storiesOf } from '@storybook/react';
import DateBox from './DateBox';

storiesOf('DateBox', module).add('box', () => <DateBox day="20" month="NOV" />);
