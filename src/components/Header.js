import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Keepit!</h1>
    <NavLink to='/' activeClassName="active-page" exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName="active-page">New expense</NavLink>
    <NavLink to='/edit' activeClassName="active-page">Modify expense</NavLink>
    <NavLink to='/help' activeClassName="active-page">Need help?</NavLink>
  </header>
);

export default Header;
