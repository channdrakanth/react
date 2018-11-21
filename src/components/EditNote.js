import React from 'react';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import {editNote} from '../actions/Notes';

const EditNote = (props) => {
        return (
            <div>
             <h3>Edit Note</h3>
                <br />
                <NoteForm 
                note = {props.note}
                onsubmitForm = {
                    (note) => {
                        props.dispatch(editNote(props.note.id, note));
                        props.history.push("/");     
                    }
                }/>
            </div>
        ); 
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find((note) => {
            return note.id === parseInt(props.match.params.id);
        })
    }
}

export default connect(mapStateToProps)(EditNote);