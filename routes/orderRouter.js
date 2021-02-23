const router = require('express').Router();
const orderController = require('../controllers/orderController');
// const Movie = require('../models/movie');
// const User = require('../models/user');
// const Order = require('../models/order');


//POST - Create a new Order in the DB
router.post('/create',async (req, res) => {
    try{
        const id = await orderController.createOrder(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.status(404).json({
            message: "Movie or User not found"
        });
    }
});

//GET - Return all Order in the DB
router.get('/list', async (req, res) => {
    try {
        res.json(await orderController.findAllOrders())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//PUT - Update a Order already exists
router.put('/update/:id', async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await orderController.updateOrder(id,req.body));
    } catch( error ){
        return res.status(500).json({
            message: err.message
        });
    }
});

//DELETE - Delete a Order with specified ID
router.delete('/remove/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await orderController.deleteOrder(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
});



module.exports = router;