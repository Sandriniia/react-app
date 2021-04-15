import React from 'react';
import '../styles/main.css';
import '../fonts/fonts.css';

import search_loupe from '../images/loupe.png';
import spider_man_main_page from '../images/spider-man.png';
import bats from '../images/bat.png';

function MainPage() {
  return (
    <div className='main'>
      <h1 className='main__title'>FIND YOUR HERO</h1>
      <form className='main__search-form'>
        <input className='main__search-input' type='text' placeholder='Search' autoFocus />
        <button className='main__button-search' type='submit'>
          <img className='main__button-search-img' src={search_loupe} alt='Search loupe' />
        </button>
      </form>
      <img className='main__image' src={spider_man_main_page} alt='Spider-man'></img>
      <img className='main__image main__image-bats' src={bats} alt='Batman and Batwomen'></img>
    </div>
  );
}

export default MainPage;
