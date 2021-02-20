const mongoose = require('mongoose');
const film = require('../models/film');
const Film = mongoose.model('Film');

//GET - Return all Films in the DB

exports.findAllFilms = (req,res) => {
    Film.find((err, film) => {
        if(err) res.send(500, err.message);

        console.log('GET /films')
            res.status(200).jsonp(film);
    });
};

//GET - Return a Film with specified ID

exports.findById = (req, res) => {
    Film.findById(req.params.id, (err, film) => {
        if(err) return res.send(500, err.message);

        console.log('GET /film/' + req.params.id);
            res.status(200).jsonp(film);
    });
}

//POST - Insert a new Film in the DB

