// comentarios siempre aqui


const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const date = new Date()

const orderSchema = {
    film_id: { 
        type: ObjectId,
        ref: 'Movie',
        required: true
    },
    user_id: { 
        type: ObjectId,
        ref: 'User',
        required: true
    },
    rental_date: {
        type: Date,
        default: new Date
    },
    return_date: {
        type: Date,
        // comentario
        default: new Date(+new Date() + 7*24*60*60*1000)
    },
    payment_method: {
        type: String
    },
    total_to_pay: {
        type: String,
        default: "2.50€"
    },
    paid: {
        type: Boolean,
        default: false
    }
}

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;