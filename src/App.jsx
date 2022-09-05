import React from 'react';
import Main from './components/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpecificGame from './components/SpecificGame';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path="/game/:id" component={ SpecificGame } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
