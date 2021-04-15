import React from 'react';
import '../styles/character_info.css';

function CharacterInfo(props) {
  return (
    <section className='profile-info'>
      <div className='profile-info__name-box'>
        <h1 className='profile-info__name'>{props.name}</h1>
      </div>
      <div className='profile-info__box-img-info'>
        <img className='profile-info__image' src={props.image} alt={props.alt} />
        <div className='profile-info__container-info'>
          <h3 className='profile-info__title'>REAL NAME</h3>
          <p className='profile-info__description'>ANNA MARIE</p>
          <h3 className='profile-info__title'>OTHER ALIASES</h3>
          <p className='profile-info__description'>
            Anna Marie (full name unrevealed), Anna Raven, Doctor Kellogg, Mutate #9602, Irene
            Adler, Miss Smith
          </p>
          <h3 className='profile-info__title'>EDUCATION</h3>
          <p className='profile-info__description'>
            College-level courses at Xavier's School, partial law degree
          </p>
          <h3 className='profile-info__title'>PLACE OF ORIGIN</h3>
          <p className='profile-info__description'>Caldecott County, Mississippi</p>
          <h3 className='profile-info__title'>POWERS</h3>
          <p className='profile-info__description'>
            Power Mimicry, Nigh Invulnerability, Flight, Superhuman Strength, Superhuman Reflexes
          </p>
          <h3 className='profile-info__title'>GROUP AFFILIATION</h3>
          <p className='profile-info__description'>X-Men</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterInfo;
