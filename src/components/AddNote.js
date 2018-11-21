import React from 'react';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import { addNote } from '../actions/Notes';
import { Link } from 'react-router-dom';

const AddNote = (props) => {
        return (
            <div>
                <h3>Add Note</h3>
                <br />
                <NoteForm onsubmitForm = {
                    (note) => {
                        props.dispatch(addNote(note));
                        props.history.push('/');
                    }
                }/>
                <Link className="float-right" to="/"> Go To Home </Link>
            </div>
        );
}

export default connect()(AddNote);