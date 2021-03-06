const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';

class Customer {

    constructor(){

    }

    //GET - Return all Users in the DB

    async findAllUsers(users){
        return User.find(users);
    };

    //GET - Return a User with specified ID

    async findById(id) {
        return User.findById(id);
    };

     //GET - Return a Film with specified Title

     async findByUserName({query}) {
        if(query == undefined)
        return []
        else
        return User.find({"user_name": query});
    };

    //POST - SignUpn a new User in the DB & Login

    async signUpUser(user){
        user.password = await bcrypt.hash(user.password, 10)
       return User.create(user)
    };

    async login(email,password){
        const user =  await User.findOne({email})
        if(!user){
            throw new Error('Email does not exist')
        }
        if (!await bcrypt.compare(password,user.password)){
            throw new Error('Password incorrect')
        }

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        return jwt.sign(payload, secret);
    }

    //PUT - Update a User Profil already existing

    async updateProfile(id,user){
        return User.findByIdAndUpdate(id,user,{new: true})
    };

    //DELETE - Delete a User with specified ID

    async deleteUser(id) {
        return User.findByIdAndRemove(id)
    };
};

let userController = new Customer();
module.exports = userController;
