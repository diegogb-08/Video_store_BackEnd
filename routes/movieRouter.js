const routerFilms = require('express').Router();
const movieController = require('../controllers/movieController')
const movieSchema = require('../models/movie')

// API routes
routerFilms.get('/movies', async (req, res) => {
    try {
        res.json(await movieController.findAllFilms())
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

routerFilms.get('/movie:id',async (req, res) => {
    try {
        res.json(await movieController.findById())
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

routerFilms.post('/add-movie',async (req, res) => {
    try{
        const id = await movieController.addFilm(new movieSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
})

routerFilms.put('/update-movie:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await cmovieController.updateFilm(id,new movieSchema(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

routerFilms.delete('/remove-movie/:id', async (req, res) => {
    try{
         const id = req.params.id;
         const status = 'deleted'
         await movieController.deleteFilm(id);
         res.json({status,id});
    } catch( error ) {
     return res.sendStatus(500).json({
         message: 'Server Error'
     });   
    }
 
 });

module.exports = routerFilms;