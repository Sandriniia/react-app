import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import './character_profile_page.css';
import { AppContext } from '../../App';

import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useFetchData from '../../hooks/useFetchData';
import add_button from '../../images/add_button.svg';

function CharacterProfilePage() {
  const params = useParams();

  const globalContext = useContext(AppContext);
  const offset = globalContext.offset;
  const offsetHandler = globalContext.offsetHandler;

  const { data, fetchData, isLoading, hasError } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/characters/${params.id}/comics`,
      offset: offset,
    });
  }, [fetchData, params.id, offset, offsetHandler]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorMessage error={hasError} />;
  }

  console.log(data);
  return (
    <>
      <section className='comics'>
        {data?.map((character) => {
          return (
            <CharacterInfo
              key={character.id}
              name={character.title}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              description={character.description}
            />
          );
        })}
      </section>
      <button onClick={offsetHandler} className='characters_page__button' type='submit'>
        {/* {props.theme === 'night' ? ()} */}
        <img
          className='characters_page__button-img'
          src={add_button}
          alt='button to add new comics'
        />
      </button>
    </>
  );
}

export default CharacterProfilePage;
