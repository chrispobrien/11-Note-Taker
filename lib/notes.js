const fs = require('fs');
const path = require('path');

// I took the liberty of allowing for word parameter to search for notes containing that words or words
//  word can be used more than once to search for two or more words occuring in a note
function filterByQuery(query, notesArray) {
    // words to search for in text
    let words = [];
    // load return array with entire notes array
    let filteredNotes = notesArray;

    // if front-end query contains one or more word= query params
    if (query.word) {
        // If word is a string, there is only one, if word is an array, there are two or more
        if (typeof query.word === 'string') {
            words = [query.word];
        } else {
            words = query.word;
        };

        // for Each word in the words array, i.e. for Each word in the query, filter the notes array
        words.forEach(word => {
            filteredNotes = filteredNotes.filter(note => note.text.includes(word));
        });
    };

    return filteredNotes;
};

// Find by Id
function findById(id, notesArray) {
    // Using +id to force string to numeric
    return notesArray.filter(note => note.id === +id)[0];
};

// Delete by Id
function deleteNote(id, notesArray) {
    // Using +id to force string to numeric
    let i = notesArray.findIndex(note => note.id === +id);

    // Splice will remove the array element at i
    notesArray.splice(i,1);

    // Write database file to storage on server
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
};

// Create new note
function createNewNote(body, notesArray) {
    // body is a json object, should be a note object
    const note = body;

    // Add new note to notes array
    notesArray.push(note);

    // Write database file to storage on server
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
};

// Validation
function validateNote(note) {
    // Note must contain a title property and it must be a string
    if (!note.title || typeof note.title !== 'string') {
        // Failed validation
        return false;
    };

    // Note must contain a text property and it must be a string
    if (!note.text || typeof note.text !== 'string') {
        // Failed validation
        return false;
    };

    // Passed validation
    return true;
};

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNote,
    deleteNote
};