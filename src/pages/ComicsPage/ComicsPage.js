import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router';
import './comics_page.css';
import { AppContext } from '../../App';

import ComicsInfo from '../../components/ComicsInfo/ComicsInfo';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useFetchData from '../../hooks/useFetchData';
import CharactersListPopup from '../../components/CharactersListPopup/CharactersListPopup';
import AddButton from '../../components/AddButton/AddButton';

function ComicsPage() {
  const params = useParams();

  const [popupCharacterId, setPopupCharacterId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleComicsInfoClick = (event) => {
    setPopupCharacterId(event.currentTarget.id);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const globalContext = useContext(AppContext);
  const offset = globalContext.offset;
  const offsetHandler = globalContext.offsetHandler;
  const theme = globalContext.theme;

  const { data, fetchData, isLoading, hasError } = useFetchData();

  useEffect(() => {
    fetchData({
      url: `https://gateway.marvel.com/v1/public/characters/${params.id}/comics`,
      offset: offset,
    });
  }, [fetchData, params.id, offset, offsetHandler]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <ErrorMessage error={hasError} />;
  }

  if (data.length === 0) {
    return <p>Sorry, nothing here</p>;
  }

  return (
    <>
      <section className='comics'>
        {data?.map((comics) => {
          return (
            <ComicsInfo
              id={comics.id}
              key={comics.id}
              name={comics.title}
              image={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt={comics.name}
              description={comics.description}
              onClick={handleComicsInfoClick}
            />
          );
        })}
      </section>
      {data.length === 10 && <AddButton onClick={offsetHandler} theme={theme} />}
      <CharactersListPopup
        onClose={handleClosePopup}
        isOpen={isOpen}
        popupCharacterId={popupCharacterId}
      />
    </>
  );
}

export default ComicsPage;
