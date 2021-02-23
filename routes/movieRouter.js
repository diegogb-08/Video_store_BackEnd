const router = require('express').Router();
const movieController = require('../controllers/movieController')

// API routes

//GET - Return all Films in the DB
router.get('/movies', async (req, res) => {
    try {
        res.json(await movieController.findAllFilms())
        console.log(res)
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
    }
});


//GET - Return a Film with specified Title
router.get('/movies/search',async (req, res) => {
    try {
        const title = await movieController.findByTitle(req.query);
        res.json(title)
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

//GET - Return a Film with specified ID
router.get('/movies/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await movieController.findById(id))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});


//POST - Insert a new Film in the DB
router.post('/add-movies',async (req, res) => {
    try{
        const id = await movieController.addFilm(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

//PUT - Update a Film already exists
router.put('/update-movie/:id', async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await movieController.updateFilm(id,req.body));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

//DELETE - Delete a Film with specified ID
router.delete('/remove-movie/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await movieController.deleteFilm(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
});

module.exports = router;