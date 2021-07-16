//Dependencies
const express = require('express');

//Express Configuration
const app = express();
const PORT = 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Listener
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});