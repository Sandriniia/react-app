import React from 'react';
import { useEffect, useState, useCallback } from 'react';

import Character from '../../components/Character/Character';
import useFetchData from '../../hooks/useFetchData';

import './characters_page.css';

function CharactersPage() {
  const [offset, setOffset] = useState(0);

  const offsetHandler = useCallback(() => {
    setOffset(offset + 10);
  }, [offset]);

  const { data, fetchData } = useFetchData();

  useEffect(() => {
    fetchData({
      url: 'https://gateway.marvel.com/v1/public/characters',
      offset: offset,
    });
  }, [fetchData, offset, offsetHandler]);

  if (data.length === 0) {
    return <p>Sorry, empty list</p>;
  }

  return (
    <>
      <div className='characters_page__container'>
        {data?.map((characterItem) => {
          return (
            <Character
              key={characterItem.id}
              image={`${characterItem.thumbnail.path}.${characterItem.thumbnail.extension}`}
              name={characterItem.name}
            />
          );
        })}
      </div>
      <button onClick={offsetHandler} className='characters_page__button' type='submit'>
        Next
      </button>
    </>
  );
}

export default CharactersPage;
