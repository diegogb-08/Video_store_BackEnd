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

     //GET - Return a Film with specified ID

     async findById(id) {
        return Order.findById(id);
    };

    //POST - Create a new Order 

    async rentMovie(user_id,film_id) {
        const userEntity = await User.findById(user_id);
        const movieEntity = await Movie.findById(film_id)
        if(!userEntity || !movieEntity){
            throw new Error('Movie or User not found')
        }
        return await Order.create({
            user_id: user_id,
            film_id: film_id
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