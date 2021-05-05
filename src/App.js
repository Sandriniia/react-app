import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterProfilePage from './pages/CharacterProfilePage/CharacterProfilePage';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/characters'>
            <CharactersPage />
          </Route>
          <Route path='/profile/:id'>
            <CharacterProfilePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
