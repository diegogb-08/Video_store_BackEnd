const Movie = require('../models/movie');


class Film {

    constructor(){

    }

    //GET - Return all Films in the DB

    async findAllFilms(filmCollection){
        return Movie.find(filmCollection);
    };

    //GET - Return a Film with specified ID

    async findById(id) {
        return Movie.findById(id);
    };

     //GET - Return a Film with specified Title

     async findByTitle({name}) {
        return Movie.findOne({name});
    };


    //POST - Insert a new Film in the DB

    async addFilm(film){
       return Movie.create(film)
    };

    //PUT - Update a Film already exists

    async updateFilm(id,film){
        return Movie.findByIdAndUpdate(id,film,{new: true})
    };

    //DELETE - Delete a Film with specified ID

    async deleteFilm(id) {
        return Movie.findByIdAndRemove(id)
    };
};

let movieController = new Film();
module.exports = movieController;
