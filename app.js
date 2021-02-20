const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = require('./db');
const port = 3000;
const filmCollection = require('./routes/movieroutes')

// Middleware
app.use(express.json())

app.use('api', filmCollection);


// Start server
db
.then(() => {
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))

