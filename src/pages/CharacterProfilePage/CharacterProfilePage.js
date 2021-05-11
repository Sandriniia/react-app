import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import './character_profile_page.css';

import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useFetchData from '../../hooks/useFetchData';

function CharacterProfilePage() {
  const params = useParams();

  const { data, fetchData, isLoading, hasError } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/characters/${params.id}/comics`,
    });
  }, [fetchData, params.id]);

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
    </>
  );
}

export default CharacterProfilePage;
