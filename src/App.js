
import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
class MyApp extends Component{

    state = {
        characters :  [

        ]
    };


    componentDidMount() {
        const url = "http://localhost:8051/notes/getAll";
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
        deleteData(`http://localhost:8051/notes/delete`, index)
        .then(data => this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        })) // JSON-string from `response.json()` call
        .catch(error => console.error(error));

    }

    handleSubmit = character => {
        postData(`http://localhost:8051/notes/addNote`, character)
            .then(data => this.setState({characters: [...this.state.characters, data]})) // JSON-string from `response.json()` call
            .catch(error => console.error(error));
    }

    render () {
      return (
        <div className="container">
            <Table charactersData =
             {this.state.characters}
             removeCharacter={this.removeCharacter}
             />
             <br />
             <Form handleSubmit = {this.handleSubmit}/>
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


  function deleteData(item, url) {
      debugger;
    return fetch(url + '/' + item, {
      method: 'delete'
    }).then(response =>
      response.json());
  }