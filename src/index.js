import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/App';
import ConfigureStore from './store/ConfigureStore';
import {addNote, removeNote, editNote} from './actions/Notes';
import {setFilterText} from './actions/Filter';
import getFilteredNotes from './selectors/FilterSelector';

const store = ConfigureStore();

store.subscribe(() => {
  const storeData = store.getState();
  const filteredData = getFilteredNotes(storeData.notes, storeData.filters);
  console.log(filteredData);
});

store.dispatch(addNote({id: 1,title: 'Note1', content: 'content of note', createdAt: undefined, updatedAt: undefined}));
store.dispatch(addNote({id: 2,title: 'Second one', content: 'content of Second one', createdAt: undefined, updatedAt: undefined}));
store.dispatch(removeNote(3));
store.dispatch(editNote(1, {title: 'Note1 update', content: 'updated content'}));

store.dispatch(setFilterText({text:'of'}));
//store.dispatch(setFilterText({sortBy:'content'}));
//store.dispatch(setFilterText({createdAt:2}));
  
    ReactDOM.render(
      <MyApp />,
      document.getElementById('root')
    );
    