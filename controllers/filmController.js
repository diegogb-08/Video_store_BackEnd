const mongoose = require('mongoose');
const films = require('../models/films');
const Film = mongoose.model('Film');

//GET - Return all movies in the DB

exports.findAllFilms = (req,res) => {
    Film.find((err, films) => {
        if(err) res.send(500, err.message);

        console.log('GET /films')
            res.status(200).jsonp(films);
    });
};

//GET - Return a TVShow with specified ID

exports.findById = (req, res) => {
    Film.findById(req.params.id, (err, film) => {
        if(err) return res.send(500, err.message);

        console.log('GET /film/' + req.params.id);
            res.status(200).jsonp(films);
    });
}