import React from 'react';
import Character from '../components/Character';

import '../styles/character.css';

import wolverine from '../images/wolverine.jpg';
import rough from '../images/rough.jpg';
import beast from '../images/beast.jpg';
import black_cat from '../images/black-cat.jpg';
import professor_x from '../images/professor-x.jpg';
import emma from '../images/emma.jpg';
import gambit from '../images/gambit.jpg';
import black_widow from '../images/black-widow.jpg';
import colossus from '../images/colossus.jpg';
import elektra from '../images/elektra.jpg';

function CharactersPage() {
  return (
    <div className='character__container'>
      <Character image={wolverine} alt='Wolverine' name='WOLVERINE' />
      <Character image={rough} alt='Rough' name='ROUGH' />
      <Character image={beast} alt='Beast' name='BEAST' />
      <Character image={black_cat} alt='Black cat' name='BLACK CAT' />
      <Character image={professor_x} alt='Professor X' name='PROFESSOR X' />
      <Character image={emma} alt='Emma Frost' name='EMMA FROST' />
      <Character image={gambit} alt='Gambit' name='GAMBIT' />
      <Character image={black_widow} alt='Black Widow' name='BLACK WIDOW' />
      <Character image={colossus} alt='Colossus' name='COLOSSUS' />
      <Character image={elektra} alt='Elektra' name='ELEKTRA' />
    </div>
  );
}

export default CharactersPage;
