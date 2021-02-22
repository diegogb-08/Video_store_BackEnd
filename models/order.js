const mongoose = require('mongoose');
const User = require('./user');
const Movie = require('./movie');


const orderSchema = {
    id: { 
        type: ObjectId 
    },  
    filmId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    creationDate: {
        type: Date,
        default: new Date
    },
    payment_method: {
        type: String,
        default: true
    }
}

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;