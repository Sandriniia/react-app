import React from 'react';

import './error-message.css';
import error_img from '../../images/error.png';

function ErrorMessage({ error }) {
  return (
    <div className='error-message'>
      <h1 className='error-message__title'>Ooops, something went wrong...</h1>
      <img className='error-message__img' src={error_img} alt=''></img>
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
