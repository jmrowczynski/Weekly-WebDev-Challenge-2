import React from 'react';
import { storiesOf } from '@storybook/react';
import bg from 'assets/img/grid-blog/Clip1.jpg';
import BlogBox from './BlogBox';

storiesOf('BlogBox', module).add('BlogBox', () => <BlogBox bg={bg} day="20" month="NOV" />);
