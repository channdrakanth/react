import getFilteredNotes from './FilterSelector';
const notes = [
    {
    id:1,title:'Note1',
    content:'content of note',
    createdAt:'11/22/2018, 10:00:00 AM',
    updatedAt:'11/22/2018, 10:00:00 AM'
    },
    {
    id:2,title:'Second one',
    content:'content of Second one',
    createdAt:'11/22/2018, 10:00:00 AM',
    updatedAt:'11/22/2018, 10:00:00 AM'
    }
];



test('Should Filter the note for given text', () => {
    const filters = {text:'one',sortBy:''};
    const result = getFilteredNotes(notes, filters);
    expect(result).toEqual([notes[1]]);
});

test('Should Filter the note for given undefined', () => {
    const filters = {text: undefined,sortBy:''};
    const result = getFilteredNotes(notes, filters);
    expect(result).toEqual(notes);
});

test('Should Filter the note for given empty text', () => {
    const filters = {text: '',sortBy:''};
    const result = getFilteredNotes(notes, filters);
    expect(result).toEqual(notes);
});

test('Should Filter the note for given text', () => {
    const filters = {text:'notinclude',sortBy:''};
    const result = getFilteredNotes(notes, filters);
    expect(result).toEqual([]);
});