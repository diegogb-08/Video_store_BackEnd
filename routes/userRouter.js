const router = require('express').Router();
const userController = require('../controllers/userController')

// API routes
router.get('/users', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
    }
});

router.get('/users/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.findById(id))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

router.post('/create-user',async (req, res) => {
    try{
        const id = await userController.createUser(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

router.put('/update-user/:id', async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await userController.updateProfile(id,req.body));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

router.delete('/remove-user/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
});

module.exports = router;