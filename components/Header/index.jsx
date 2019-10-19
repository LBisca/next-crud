import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './style.scss';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <h1 className="title">React Next CRUD</h1>
    </AppBar>
  );
};

export default Header;
