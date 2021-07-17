//DEPENDENCIES
const express = require('express');


//EXPRESS CONFIG
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


//LISTENER
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});