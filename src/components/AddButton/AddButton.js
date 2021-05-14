import React from 'react';
import './add_button.css';
import add_button_day from '../../images/add_button_day.svg';
import add_button_night from '../../images/add_button_night.png';

function AddButton(props) {
  return (
    <button onClick={props.onClick} className='add-button' type='submit'>
      {props.theme === 'night' ? (
        <img className='add-button-img' src={add_button_night} alt='button to add new comics' />
      ) : (
        <img className='add-button-img' src={add_button_day} alt='button to add new comics' />
      )}
    </button>
  );
}

export default AddButton;
