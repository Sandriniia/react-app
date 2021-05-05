import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './main.css';
import '../../fonts/fonts.css';

import search_loupe from '../../images/loupe.png';
import spider_man_main_page from '../../images/spider-man.png';
// import bats from '../../images/bat.png';

function MainPage() {
  const [searchValue, setSearchValue] = useState(' ');

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const { data, fetchData } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/characters`,
      name: searchValue,
      limit: 99,
    });
  }, [fetchData, searchValue]);

  const id = data?.map((characterItem) => {
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
