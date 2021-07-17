//LOAD DATA

const noteData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        const id = generateUniqueId ({
            length: 5,
            useLetters: true,
            useNumbers: false
        });

        newNote.routeName = newNote.name.replace(id);
        console.log(newNote);

        noteData.push(newNote);
        res.json(newNote);
    });
};