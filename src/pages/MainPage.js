import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/main.css';
import '../fonts/fonts.css';

import search_loupe from '../images/loupe.png';
import spider_man_main_page from '../images/spider-man.png';
import bats from '../images/bat.png';

function MainPage() {
  const [searchValue, setSearchValue] = useState(' ');
  const [character, setCharacter] = useState([]);

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    async function fetchCharactersData() {
      try {
        const apiCallResponse = await axios.get('https://gateway.marvel.com/v1/public/characters', {
          params: {
            apikey: 'a5837db97d72016c81a7a776f4240db9',
            name: searchValue,
            limit: 99,
          },
        });
        setCharacter(apiCallResponse.data.data.results);
      } catch (error) {
        console.log('👷 Error 👷', error);
      }
    }

    fetchCharactersData();
  }, [searchValue]);

  const id = character?.map((characterItem) => {
    return characterItem.id;
  });

  return (
    <div className='main'>
      <h1 className='main__title'>FIND YOUR HERO</h1>
      <form className='main__search-form'>
        <input
          className='main__search-input'
          type='text'
          placeholder='Search'
          autoFocus
          onChange={searchValueHandler}
        />
        <Link to={`/profile/${id}`} className='main__button-search' type='submit'>
          <img className='main__button-search-img' src={search_loupe} alt='Search loupe' />
        </Link>
      </form>
      <img className='main__image' src={spider_man_main_page} alt='Spider-man'></img>
      {/* <img className='main__image main__image-bats' src={bats} alt='Batman and Batwomen'></img> */}
    </div>
  );
}

export default MainPage;
