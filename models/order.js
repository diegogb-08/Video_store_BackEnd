const mongoose = require('mongoose');


const orderSchema = {
    id: { 
        type: ObjectId 
    },  
    filmId: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
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

const Order = mongoose.model('order', orderSchema);
module.exports = Order;