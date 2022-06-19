const fs = require('fs');
const path = require('path');

// I took the liberty of allowing for word parameter to search for notes containing that words or words
//  word can be used more than once to search for two or more words occuring in a note
function filterByQuery(query, notesArray) {
    let words = [];
    let filteredNotes = notesArray;

    if (query.word) {
        if (typeof query.word === 'string') {
            words = [query.word];
        } else {
            words = query.word;
        };

        words.forEach(word => {
            filteredNotes = filteredNotes.filter(note => note.text.includes(word));
        });
    };

    return filteredNotes;
};

// Find by Id
function findById(id, notesArray) {
    return notesArray.filter(note => note.id === +id)[0];
};

// Delete by Id
function deleteNote(id, notesArray) {
    let i = notesArray.findIndex(note => note.id === +id);
    notesArray.splice(i,1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
};

// Create new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
};

// Validation
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    };
    if (!note.text || typeof note.text !== 'string') {
        return false;
    };
    return true;
};

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote,
    deleteNote
};