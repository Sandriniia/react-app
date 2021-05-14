import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useFetchData from '../../hooks/useFetchData';
import './main.css';
import '../../fonts/fonts.css';

import search_loupe from '../../images/loupe.png';
import spider_man_main_page from '../../images/spider-man.png';

function MainPage() {
  const [searchValue, setSearchValue] = useState(' ');

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const { data, fetchData, isLoading, hasError } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/characters`,
      name: searchValue,
      limit: 99,
    });
  }, [fetchData, searchValue]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorMessage error={hasError} />;
  }

  const id = data?.map((characterItem) => {
    return characterItem.id;
  });

  return (
    <div className='main'>
      <img className='main__image' src={spider_man_main_page} alt='Spider-man'></img>
      <div className='main__container'>
        <h1 className='main__title'>Find comics with your hero</h1>
        <form className='main__search-form'>
          <input
            className='main__search-input'
            type='text'
            placeholder='Spider-man'
            autoFocus
            onChange={searchValueHandler}
          />
          <Link to={`/profile/${id}/comics`} className='main__button-search-link' type='submit'>
            <button className='main__button-search'>
              <img className='main__button-search-img' src={search_loupe} alt='Search loupe' />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
