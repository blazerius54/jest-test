import React from 'react';
import logo from '../../images/city.svg';
import './styles.scss';
const Header = () => (
  <header className="app-header">
    <h1>PostMail</h1>
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
  </header>
);

export default Header;
