const mongoose = require('mongoose');

const userSchema = {
    first_name: { 
        type: String,
        required: true
    },
    last_name: { 
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    creationDate: {
        type: Date,
        default: new Date
    },
    birth_date: { 
        type: String,
    },
    email: {
        type: String
    },
    phone_number: { 
        type: String
    },
    address: { 
        type: String
    },
    personalId: { 
        type: String
    },
    genre: { 
        type: String
    },
    payment_method: {
        type: String
    }
};

const User = mongoose.model('User', userSchema);
module.exports = User;