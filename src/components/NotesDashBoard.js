import React, {Component} from 'react';
import NotesList from './NotesList';
import FilterNotes from './FilterNotes';

const endPointUrl = "http://localhost:8051" ;

class NotesDashBoard extends Component{

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

    removeNote = index => {
        const { characters } = this.state;
        deleteData(endPointUrl + "/notes/delete", index)
        .then(data => this.setState({
            characters: characters.filter((character) => { 
                return character.id !== index;
            })
        })) 
        .catch(error => console.error(error));

    }

    editNote = note => {
        console.log(note);
    }

    handleSubmit = character => {
        postData(endPointUrl + "/notes/addNote", character)
            .then(data => this.setState({characters: [...this.state.characters, data]})) // JSON-string from `response.json()` call
            .catch(error => console.error(error));
    }

    render () {
      return (
        <div>
            <br />
            <h3> Notes List </h3>
            <br />
            <FilterNotes />
            <br />
            <NotesList/>
        </div>
      );
    }

  }

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


  export default NotesDashBoard;