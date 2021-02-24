const Order = require('../models/order');


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

    async rentMovie(order){
        return Order.create(order)
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