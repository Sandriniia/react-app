import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import '../../fonts/fonts.css';

function Navigation() {
  return (
    <header className='navigation'>
      <nav className='navigation__nav'>
        <ul className='navigation__nav-list'>
          <li>
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
              exact
              to='/'
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
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

export default Navigation;
