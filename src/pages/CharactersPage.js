import React from 'react';
import { useEffect, useState, useCallback } from 'react';

import Character from '../components/Character';
import axios from 'axios';

import '../styles/character.css';

function CharactersPage() {
  const [charactersList, setCharactersList] = useState([]);
  const [offset, setOffset] = useState(0);

  const offsetHandler = useCallback(() => {
    setOffset(offset + 10);
  }, [offset]);

  useEffect(() => {
    async function fetchCharactersData() {
      try {
        const apiCallResponse = await axios.get('https://gateway.marvel.com/v1/public/characters', {
          params: {
            apikey: 'a5837db97d72016c81a7a776f4240db9',
            limit: 10,
            offset: offset,
          },
        });
        console.log(apiCallResponse.data.data.results);
        setCharactersList(apiCallResponse.data.data.results);
      } catch (error) {
        console.log('👷 Error 👷', error);
      }
    }

    fetchCharactersData();
  }, [offsetHandler, offset]);

  if (charactersList.length === 0) {
    return <p>Sorry, empty list</p>;
  }

  return (
    <>
      <div className='character__container'>
        {charactersList?.map((characterItem) => {
          return (
            <Character
              key={characterItem.id}
              image={`${characterItem.thumbnail.path}.${characterItem.thumbnail.extension}`}
              name={characterItem.name}
            />
          );
        })}
      </div>
      <button onClick={offsetHandler} className='character__button' type='submit'>
        Next
      </button>
    </>
  );
}

export default CharactersPage;
