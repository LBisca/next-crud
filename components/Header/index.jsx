import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import css from './style.scss';

const Header = () => {
  return (
    <AppBar position="static" className={css.header}>
      <div className={css.wrapper}>
        <h1 className={css.title}>React Next CRUD</h1>
      </div>
    </AppBar>
  );
};

export default Header;
