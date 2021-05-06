import React, { useState } from 'react';
import './character.css';

function Character(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const mouseOverHandler = () => {
    setIsMouseOver(true);
  };

  const mouseOutHandler = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      className={`character ${isMouseOver ? 'character_change_color' : ''}`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <img className='character__image' src={props.image} alt={props.alt} />
      <div className='character__name-box'>
        <p className='character__name'>{props.name}</p>
      </div>
    </div>
  );
}

export default Character;
