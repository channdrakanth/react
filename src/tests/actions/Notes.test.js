import {addNote, removeNote, editNote} from '../../actions/Notes';


test('Should Create addNote note action object', () => {
    const note = {
        id: 1,
        title: 'test',
        content: 'test content',
        createdAt: 'test created date',
        updatedAt: 'test updated date'
    }
    const action = addNote(note);
    expect(action).toEqual({
        type: 'ADD_NOTE',
        note
    });
});

test('Should Create editNote note action object', () => {
    const updatedNote = {
        id: 1,
        title: 'test Updste',
        content: 'test content Update',
        createdAt: 'test created date',
        updatedAt: 'test updated date'
    }
    const action = editNote(9989,updatedNote);
    expect(action).toEqual({
        type: 'EDIT_NOTE',
        id: 9989,
        updates: updatedNote
    });
});

test('Should Create remove note action object', () => {
    const action = removeNote(9989);
    expect(action).toEqual({
        type: 'REMOVE_NOTE',
        id: 9989
    });
});