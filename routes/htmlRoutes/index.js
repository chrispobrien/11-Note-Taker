const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirnam,'../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirnam,'../../public/index.html'));
});

module.exports = router;