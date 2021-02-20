const express = require('express');
const movieController = require('../controllers/movieController')
const filmCollection = express.Router();

// API routes
filmCollection.get('/movies', movieController.findAllFilms);
filmCollection.get('/movie:id', movieController.findById);

filmCollection.post('/add-movie',movieController.addFilm);

filmCollection.put('/update-movie:id',movieController.updateFilm);

filmCollection.delete('/remove-movie/:id', movieController.deleteFilm);

module.exports = filmCollection;