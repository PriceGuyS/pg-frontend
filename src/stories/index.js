import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from '../App';
import Menu from '../Menu';

storiesOf('Home', module)
  .add('load home page', () => (
    <App />
  ));

storiesOf('Menu', module)
  .add('load menu component', () => (
    <Menu />
  ));
