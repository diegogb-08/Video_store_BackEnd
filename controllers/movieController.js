const mongoose = require('mongoose');
const movie = require('../models/movie');


class Film {

    constructor(){

    }

    //GET - Return all Films in the DB

    async findAllFilms(req,res){
        movie.find((err, filmCollection) => {
        if(err) res.send(500, err.message);

            console.log('GET / allFilms')
            res.status(200).jsonp(filmCollection);
        });
    };

    //GET - Return a Film with specified ID

    async findById(req, res) {
        movie.findById(req.params.id, (err, film) => {
        if(err) return res.send(500, err.message);

            console.log('GET /film/' + req.params.id);
            res.status(200).jsonp(film);
        });
    }

    //POST - Insert a new Film in the DB

    async addFilm(req, res){
        console.log('POST');
        console.log(req.body);

        const film = new movie ({
            id: req.body.id,
            title: req.body.title,
            creationDate: req.body.creationDate,
            year: req.body.year,
            country: req.body.country,
            poster: req.body.poster,
            genre: req.body.genre,
            description: req.body.description,
            adult: req.body.adult
        });

        film.save((err, film) => {
            if(err) return res.status(500).send( err.message);
        res.status(200).json(film);
        })
    };

    //PUT - Update a register already exists

    async updateFilm(req, res){
        movie.findById(req.params.id, (err, film) => {
            film.title = req.body.title;
            film.creationDate = req.body.creationDate;
            film.year = req.body.year;
            film.country = req.body.country;
            film.poster = req.body.poster;
            film.genre = req.body.genre;
            film.description = req.body.description;
            film.adult = req.body.adult;

            film.save((err) => {
                if(err) return res.status(500).send(err.message);
                res.status(200).json(film)
            })
        });
    };

    //DELETE - Delete a TVShow with specified ID

    async deleteFilm(req, res) {
        movie.findById(req.params.id, (err, film) => {
            film.remove((err) => {
                if(err) return res.status(500).send(err.message)
                res.status(200).send();
            });
        });
    };


};

let movieController = new Film();
module.exports = movieController;
