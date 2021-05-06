import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Loading from '../../components/Loading/Loading';
import useFetchData from '../../hooks/useFetchData';

function CharacterProfilePage() {
  const params = useParams();

  const { data, fetchData, isLoading } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/characters/${params.id}`,
    });
  }, [fetchData, params.id]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <>
      {data?.map((character) => {
        return (
          <CharacterInfo
            key={character.id}
            name={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        );
      })}
    </>
  );
}

export default CharacterProfilePage;
