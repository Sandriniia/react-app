import React, { useState, createContext, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterProfilePage from './pages/CharacterProfilePage/CharacterProfilePage';
import CharactersListPopup from './components/CharactersListPopup/CharactersListPopup';

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState('day');
  const [offset, setOffset] = useState(0);

  const offsetHandler = useCallback(() => {
    setOffset(offset + 10);
  }, [offset]);

  function handleThemeChange() {
    if (theme === 'night') {
      setTheme('day');
    } else {
      setTheme('night');
    }
  }

  const globalState = {
    offset,
    offsetHandler,
  };

  return (
    <>
      <div className={theme === 'night' ? 'app__night' : 'app__day'}>
        <AppContext.Provider value={globalState}>
          <Router>
            <Navigation onThemeChange={handleThemeChange} theme={theme} />
            <Switch>
              <Route exact path='/'>
                <MainPage />
              </Route>
              <Route path='/characters'>
                <CharactersPage theme={theme} />
              </Route>
              <Route path='/profile/:id/comics'>
                <CharacterProfilePage />
              </Route>
            </Switch>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
