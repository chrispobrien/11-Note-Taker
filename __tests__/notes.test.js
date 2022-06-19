const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewNote,
    validateNote,
    deleteNote
} = require('../lib/notes.js');
const notes = require('../db/db.json');

// Prevent tests from writing to filesystem
jest.mock('fs');

test('creates a note', () => {
    const note = createNewNote({ title: 'My New Note', text: 'My New Text'}, notes);

    expect(note.title).toBe('My New Note');
    expect(note.text).toBe('My New Text');
});

test('find by id', () => {
    const startingNotes = [
        {
            id: 0,
            title: 'My First New Note',
            text: 'The text of my first new note'
        },
        {
            id: 1,
            title: 'My Second New Note',
            text: 'The text of my second new note'
        }
    ];

    const findNote = findById('1',startingNotes);

    expect(findNote.title).toEqual('My Second New Note');
});

test('filters by query', () => {
    const startingNotes = [
        {
            id: 0,
            title: 'My First New Note',
            text: 'The text of my first new note'
        },
        {
            id: 1,
            title: 'My Second New Note',
            text: 'The text of my second new note'
        }
    ];

    const updatedNotes = filterByQuery({ word: 'second'}, startingNotes);

    expect(updatedNotes.length).toEqual(1);
});

test('validate new note', () => {
    const newNote = { title: 'My First New Note', text: 'The text of my first new note.'};
    expect(validateNote(newNote)).toEqual(true);
    const badNote = { title: 1 };
    expect(validateNote(badNote)).toEqual(false);
});

test('delete a note', () => {
    const startingNotes = [
        {
            id: 0,
            title: 'My First New Note',
            text: 'The text of my first new note'
        },
        {
            id: 1,
            title: 'My Second New Note',
            text: 'The text of my second new note'
        }
    ];

    deleteNote(0,startingNotes);
    expect(startingNotes.length).toEqual(1);
});