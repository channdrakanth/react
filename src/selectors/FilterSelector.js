export default (notes, filters) => {
    if(Object.keys(filters)[0] === 'text'){
        return notes.filter((note) => {
            return note.title.toLowerCase().includes(filters.text) || note.content.toLowerCase().includes(filters.text)
        });
    }
    if(Object.keys(filters)[0] === 'sortBy'){
        return notes.filter((note) => {
            return note.title.toLowerCase().includes(filters.text) || note.content.toLowerCase().includes(filters.text)
        });
    }
    else {
        return notes;
    }
    
}