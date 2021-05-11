import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterProfilePage from './pages/CharacterProfilePage/CharacterProfilePage';

function App() {
  const [theme, setTheme] = useState('day');

  function handleThemeChange(event) {
    if (theme === 'night') {
      setTheme('day');
    } else {
      setTheme('night');
    }
  }

  return (
    <>
      <Router>
        <div className={theme === 'night' ? 'app__night' : 'app__day'}>
          <Navigation onThemeChange={handleThemeChange} theme={theme} />
          <Switch>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route path='/characters'>
              <CharactersPage theme={theme}/>
            </Route>
            <Route path='/profile/:id'>
              <CharacterProfilePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
