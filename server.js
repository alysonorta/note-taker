//DEPENDENCIES
const express = require('express');
const path = require('path');

//EXPRESS CONFIG
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));


//LISTENER
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});