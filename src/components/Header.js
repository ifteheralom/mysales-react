import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/login" activeClassName="is-active">Login</NavLink>
    <NavLink to="/register" activeClassName="is-active">Register</NavLink>
  </header>
);

export default Header;