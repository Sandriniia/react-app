import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CharactersPage from './pages/CharactersPage';
import CharacterProfilePage from './pages/CharacterProfilePage';

import './styles/character.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/characters'>
            <CharactersPage />
          </Route>
          <Route path='/profile'>
            <CharacterProfilePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
