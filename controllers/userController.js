const User = require('../models/user');


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



    //POST - SignIn a new User in the DB

    async signInUser(profile){
       return User.create(profile)
    };

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
