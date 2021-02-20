const express = require('express');
const app = express();
const db = require('./db');
const port = 3000;
const routerFilms = require('./routes/movieRouter')

// Middleware
app.use(express.json())

app.use(routerFilms);


// Start server
db
.then(() => {
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message))

