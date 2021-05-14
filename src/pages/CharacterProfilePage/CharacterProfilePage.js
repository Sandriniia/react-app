import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router';
import './character_profile_page.css';
import { AppContext } from '../../App';

import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useFetchData from '../../hooks/useFetchData';
import CharactersListPopup from '../../components/CharactersListPopup/CharactersListPopup';
import add_button from '../../images/add_button.svg';

function CharacterProfilePage() {
  const params = useParams();

  const [popupCharacterId, setPopupCharacterId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleComicsInfoClick = (event) => {
    setPopupCharacterId(event.currentTarget.id);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

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

  return (
    <>
      <section className='comics'>
        {data?.map((character) => {
          return (
            <CharacterInfo
              id={character.id}
              key={character.id}
              name={character.title}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              description={character.description}
              onClick={handleComicsInfoClick}
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
      <CharactersListPopup
        onClose={handleClosePopup}
        isOpen={isOpen}
        popupCharacterId={popupCharacterId}
      />
    </>
  );
}

export default CharacterProfilePage;
