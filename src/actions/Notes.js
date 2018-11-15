export const addNote = ({id, title, content, createdAt, updatedAt} ={}) => ({
    type: 'ADD_NOTE',
    note: {
        id,
        title,
        content,
        createdAt,
        updatedAt
    }
});

export const removeNote = (id) =>({
    type: 'REMOVE_NOTE',
    id
});


export const editNote = (id, updates) =>({
    type: 'EDIT_NOTE',
    id,
    updates
});