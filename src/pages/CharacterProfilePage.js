import React from 'react';

import CharacterInfo from '../components/CharacterInfo';
import CharacterBiography from '../components/CharacterBiography';

import rogue from '../images/rogue.jpg';

function CharacterProfilePage() {
  return (
    <>
      <CharacterInfo name='ROGUE' image={rogue} alt='Rogue' />
      <CharacterBiography />
    </>
  );
}

export default CharacterProfilePage;
