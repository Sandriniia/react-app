import React from 'react';
import './character_info.css';

function CharacterInfo(props) {
  return (
    <div id={props.id} onClick={props.onClick} className='profile-info'>
      <div className='profile-info__name-box'>
        <h1 className='profile-info__name'>{props.name}</h1>
      </div>
      <div id={props.id} className='profile-info__box-img-info'>
        <img className='profile-info__image' src={props.image} alt={props.alt} />
        <p className='profile-info__description'>{props.description}</p>
      </div>
    </div>
  );
}

export default CharacterInfo;
