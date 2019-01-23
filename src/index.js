import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConfigureStore from './store/ConfigureStore';
import AppRoutes from './router/Routes'

import {addNote, removeNote, editNote} from './actions/Notes';
import getFilteredNotes from './selectors/FilterSelector';
import { Provider } from 'react-redux';

const store = ConfigureStore();

store.subscribe(() => {
  const storeData = store.getState();
  const filteredData = getFilteredNotes(storeData.notes, storeData.filters);
  console.log(filteredData);
});

store.dispatch(addNote({id: 1,title: 'Note1', content: 'content of note', createdAt: new Date().toLocaleString(), updatedAt: new Date().toLocaleString()}));
store.dispatch(addNote({id: 2,title: 'Second one', content: 'content of Second one', createdAt: new Date().toLocaleString(), updatedAt: new Date().toLocaleString()}));
store.dispatch(addNote({id: 3,title: 'Third one', content: 'content of Third one', createdAt: new Date().toLocaleString(), updatedAt: new Date().toLocaleString()}));
store.dispatch(removeNote(4));
store.dispatch(editNote(1, {title: 'Note1 update', content: 'updated content'}));

//store.dispatch(setFilterText({sortBy:'content'}));
//store.dispatch(setFilterText({createdAt:2}));
  const jsx =  (
      <Provider store = { store }>
        <AppRoutes />
      </Provider>
    );

  ReactDOM.render(
      jsx ,
      document.getElementById('root')
  );
    