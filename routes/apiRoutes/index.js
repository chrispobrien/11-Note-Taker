const { filterByQuery, findById, createNewNote, validateNote, deleteNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const router = require('express').Router();

// GET returns all notes, with option query word= to filter by word in text
router.get('/notes', (req, res) => {
    let results = filterByQuery(req.query,notes);
    res.json(results);
});

// GET with id specified will get the note with that id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.status(400).send('No note exists with that id.');
    };
});

// POST creates new note
router.post('/notes', (req, res) => {
    let newId = 0;
    if (notes.length>0) {
        newId = Math.max(...notes.map(note => note.id))+1;
    };
    req.body.id = newId;
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    };
});

// DELETE specifies an id and deletes the note
router.delete('/notes/:id', (req, res) => {
    // Check if note with this id exists
    const result = findById(req.params.id, notes);

    if (result) {
        deleteNote(req.params.id, notes);
        res.status(200).send(`Note with id ${req.params.id} deleted.`);
    } else {
        res.status(400).send(`Unable to find a note with id ${req.params.id}.`);
    };
});

module.exports =  router;