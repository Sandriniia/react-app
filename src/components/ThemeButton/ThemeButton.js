import React from 'react';
import day_button from '../../images/button_day.png';
import night_button from '../../images/button_night.png';
import './theme-button.css';

function ThemeButton(props) {
  return (
    <button className='theme-button' onClick={props.onThemeChange}>
      {props.theme === 'night' ? (
        <img className='theme-button__img' src={day_button} alt='' />
      ) : (
        <img className='theme-button__img' src={night_button} alt='' />
      )}
    </button>
  );
}

export default ThemeButton;
