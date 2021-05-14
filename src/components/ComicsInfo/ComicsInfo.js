import React from 'react';
import './comics_info.css';

function ComicsInfo(props) {
  return (
    <div id={props.id} onClick={props.onClick} className='comics-info'>
      <div className='comics-info__name-box'>
        <h1 className='comics-info__name'>{props.name}</h1>
      </div>
      <div id={props.id} className='comics-info__box-img-info'>
        <img className='comics-info__image' src={props.image} alt={props.alt} />
        <p className='comics-info__description'>{props.description}</p>
      </div>
    </div>
  );
}

export default ComicsInfo;
