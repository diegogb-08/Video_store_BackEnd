const Order = require('../models/order');


class Rental {

    constructor(){

    }

    //GET - Return all Rentals in the DB

    async findAllOrders(){
        return Order.find();
    };

    //POST - Create a new Order 

    async createOrder(order){
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