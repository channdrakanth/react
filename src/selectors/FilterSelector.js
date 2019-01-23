export default (notes, filters) => {
    if(filters.text){
        return notes.filter((note) => {
            return note.title.toLowerCase().includes(filters.text) || note.content.toLowerCase().includes(filters.text)
        });
    }
    else if(filters.sortBy){

    }
    else {
        return notes;
    }
    
}