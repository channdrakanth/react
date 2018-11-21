import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import NotesList from '../components/NotesList';
import AddNote from '../components/AddNote';
import EditNote from '../components/EditNote';
import {Header, MenuItems, NotFoundPage} from '../components/Header';


export default  () => (
    <BrowserRouter>
    <div className="container">
      <Header />
      <MenuItems />
      <Switch >
        <Route path="/" component ={ NotesList } exact />
        <Route path="/create" component ={ AddNote }/>
        <Route path="/edit/:id" component ={ EditNote }/>
        <Route  component = { NotFoundPage }/>
      </Switch>
    </div>
    </BrowserRouter>
  );