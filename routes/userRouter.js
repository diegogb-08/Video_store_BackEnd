const router = require('express').Router();
const userController = require('../controllers/userController')

// API routes

//GET - Return all Users in the DB

router.get('/users', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
    }
});

//GET - Return a User with specified ID

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

 //POST - SignIn a new User in the DB

router.post('/signin-user',async (req, res) => {
    try{
        const id = await userController.signInUser(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

  //PUT - Update a User Profil already existing

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

//DELETE - Delete a User with specified ID

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