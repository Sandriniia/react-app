import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';
import './navigation.css';
import '../../fonts/fonts.css';

function Navigation(props) {
  return (
    <header className='navigation'>
      <ThemeButton onThemeChange={props.onThemeChange} theme={props.theme} />
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
