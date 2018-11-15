
import React, {Component} from 'react';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import ConfigureStore from './store/ConfigureStore';
import {addNote, removeNote, editNote} from './actions/Notes';
import {setFilterText} from './actions/Filter';
import getFilteredNotes from './selectors/FilterSelector';

const endPointUrl = "http://localhost:8051" ;

class MyApp extends Component{

    state = {
        characters :  [

        ]
    };


    componentDidMount() {
        const url = endPointUrl + "/notes/getAll";
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    characters: result
                })
            });
    }

    removeCharacter = index => {
        const { characters } = this.state;
        deleteData(endPointUrl + "/notes/delete", index)
        .then(data => this.setState({
            characters: characters.filter((character) => { 
                return character.id !== index;
            })
        })) 
        .catch(error => console.error(error));

    }

    editCharacter = character => {
        console.log(character);
    }

    handleSubmit = character => {
        postData(endPointUrl + "/notes/addNote", character)
            .then(data => this.setState({characters: [...this.state.characters, data]})) // JSON-string from `response.json()` call
            .catch(error => console.error(error));
    }

    render () {
      return (
        <div className="container">
            <NotesList charactersData =
             {this.state.characters}
             removeCharacter={ this.removeCharacter }
             editCharacter = { this.editCharacter }
             />
             <br />
             <AddNoteForm handleSubmit = {this.handleSubmit}/>
        </div>
      );
    }

  }

  export default MyApp;

  function postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }


  function deleteData(url, item) {
    return fetch(url + '/' + item, {
      method: 'delete'
    });
  }

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
