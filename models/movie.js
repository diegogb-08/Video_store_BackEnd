//version, nombre, 

//explicacion del model

const mongoose = require('mongoose');

const movieSchema = {
    title: { 
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: new Date
    },
    year: { 
        type: Number 
    },
    country: { 
        type: String 
    },
    poster: { 
        type: String 
    },
    genre: { 
        type: String
    },
    description: { 
        type: String 
    },
    adult: { 
        type: Boolean,
    }
}

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;