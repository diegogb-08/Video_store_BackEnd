const Order = require('../models/order');
const User = require('../models/user');
const Movie = require('../models/movie');

class Rental {

    constructor(){

    }

    //GET - Return all Rentals in the DB

    async findAllOrders(){
        return Order.find();
    };

    //GET - Return all Rentals in the DB

    async findAllOrdersByUserId(userId){
        return Order.find({user_id : userId});
    };

     //GET - Return a Film with specified ID

     async findById(id) {
        return Order.findById(id);
    };

    //POST - Create a new Order

    async rentMovie(body, id) {
        const userEntity = await User.findById(id);
        if(!userEntity){
            throw new Error('User not found')
        }
        return await Order.create({
            user_id: id,
            user_email : userEntity.email,
            rental: body.rental
        });
    };

    //PUT - Update an existing Order

    async updateOrder(id,order){
        return Order.findByIdAndUpdate(id,order,{new: true})
    };

     //DELETE - Delete a Film with specified ID

    async deleteOrder(id) {
        return Order.findByIdAndRemove(id)
    };

}


let orderController = new Rental();
module.exports = orderController;