import React, { useEffect } from 'react';
import './characters_list_popup.css';
import useFetchData from '../../hooks/useFetchData';
import Character from '../../components/Character/Character';
import close_button from '../../images/CloseIcon.svg';

function CharactersListPopup(props) {
  const id = props.popupCharacterId;
  console.log(id);
  const { data, fetchData } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/comics/${id}/characters`,
      limit: 14,
    });
  }, [fetchData, id]);
  console.log(data);

  return (
    <div className={`popup ${props.isOpen ? '' : 'popup_hidden'}`}>
      <button className='popup__button' onClick={props.onClose}>
        <img
          className='popup__button-img'
          src={close_button}
          alt='Button to close a popup with characters'
        />
      </button>
      <div className='popup__img-container'>
        {data?.map((character) => {
          return (
            <Character
              key={character.id}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharactersListPopup;
