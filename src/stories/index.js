import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Main from '../Main';
import Menu from '../Menu';

storiesOf('Home', module)
  .add('load home page', () => (
    <Main />
  ));

storiesOf('Menu', module)
  .add('load menu component', () => (
    <Menu />
  ));
