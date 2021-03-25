const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    full_name: { 
        type: String,
    },
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    creationDate: {
        type: Date,
        default: new Date
    },
    birth_date: { 
        type: Date,
    },
    phone_number: { 
        type: Number,
    },
    address: { 
        type: String
    },
    payment_method: {
        type: String
    }
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
}


userSchema.set('toJSON', toJSONConfig);


const User = mongoose.model('User', userSchema);
module.exports = User;