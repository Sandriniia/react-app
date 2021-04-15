import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import '../fonts/fonts.css';

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li>
            <NavLink className='header__link' activeClassName='header__link_active' exact to='/'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className='header__link'
              activeClassName='header__link_active'
              to='/characters'
            >
              All characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
