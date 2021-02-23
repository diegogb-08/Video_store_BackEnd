const router = require('express').Router();
const routerFilms = require('./routes/movieRouter')
const routerUser = require('./routes/userRouter')
const orderUser = require('./routes/orderRouter')

router.use('/movie', routerFilms);
router.use('/user', routerUser);
router.use('/rental', orderUser);

module.exports = router;