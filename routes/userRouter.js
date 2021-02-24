const router = require('express').Router();
const userController = require('../controllers/userController')

// API routes

//GET - Return all Users in the DB

router.get('/', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//GET - Return a User with specified User_name ?query=
router.get('/search',async (req, res) => {
    try {
        const userName = await userController.findByUserName(req.query);
        res.json(userName)
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


//GET - Return a User with specified ID

router.get('/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.findById(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

 //POST - SignIn a new User in the DB

router.post('/',async (req, res) => {
    try{
        const id = await userController.signInUser(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.status(500).json({
            message: err.message
        });
    }
})

  //PUT - Update a User Profil already existing

router.put('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const userUpdated = await userController.updateProfile(id,req.body)
        res.json(userUpdated).status(200);
    } catch( error ){
        return res.status(500).json({
            message: err.message
        });
    }
});

//DELETE - Delete a User with specified ID

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({status,id});
    } catch( error ) {
        return res.status(500).json({
            message: err.message
     });   
    }
});

module.exports = router;