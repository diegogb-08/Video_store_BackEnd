const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});


app.use(express.json())
app.use(router);

mongoose.connect('mongodb://localhost/film', { useNewUrlparser: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err)
    }
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
});

