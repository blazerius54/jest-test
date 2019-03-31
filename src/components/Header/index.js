import React from 'react';
import logo from '../../images/city.svg';
import './styles.scss';

const Header = () => (
  <header className="app-header">
    <h1 data-test="title">PostMail</h1>
    <div className="logo-container">
      <img src={logo} data-test="logo" alt="logo" />
    </div>
  </header>
);

export default Header;
