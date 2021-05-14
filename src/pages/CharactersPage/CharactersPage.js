import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Character from '../../components/Character/Character';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useFetchData from '../../hooks/useFetchData';
import AddButton from '../../components/AddButton/AddButton';

import { AppContext } from '../../App';

import './characters_page.css';

function CharactersPage(props) {
  const globalContext = useContext(AppContext);
  const offset = globalContext.offset;
  const offsetHandler = globalContext.offsetHandler;
  const theme = globalContext.theme;

  const { data, fetchData, isLoading, hasError } = useFetchData();

  useEffect(() => {
    fetchData({
      url: 'https://gateway.marvel.com/v1/public/characters',
      offset: offset,
    });
  }, [fetchData, offset, offsetHandler]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorMessage error={hasError} />;
  }

  return (
    <>
      <div className='characters_page__container'>
        {data?.map((characterItem) => {
          return (
            <Link
              to={`/profile/${characterItem.id}/comics`}
              className='characters_page__link'
              type='button'
            >
              <Character
                key={characterItem.id}
                image={`${characterItem.thumbnail.path}.${characterItem.thumbnail.extension}`}
                name={characterItem.name}
              />
            </Link>
          );
        })}
      </div>
      {data.length === 10 && <AddButton theme={theme} onClick={offsetHandler} />}
    </>
  );
}

export default CharactersPage;
