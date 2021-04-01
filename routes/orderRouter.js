const router = require('express').Router();
const orderController = require('../controllers/orderController');
const auth = require('../middlewares/auth');


//POST - Create a new Order in the DB
router.post('/user/:id', auth, async (req, res) => {
    try{
        res.json(await orderController.rentMovie(req.body, req.params.id));
    } catch( error ){
        return res.status(404).json({
            message: "User not found"
        });
    }
});

//GET - Return all Order in the DB
router.get('/', async (req, res) => {
    try {
        res.json(await orderController.findAllOrders())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//GET - Return all Orders from user id
router.get('/user/:id',auth, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.findAllOrdersByUserId(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//GET - Return a Order with specified ID
router.get('/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.findById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//PUT - Update a Order already exists
router.put('/:id', async (req,res) => {
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
router.delete('/:id', async (req, res) => {
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