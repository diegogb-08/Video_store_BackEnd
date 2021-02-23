const router = require('express').Router();
const routerFilms = require('./routes/movieRouter')
const routerUser = require('./routes/userRouter')

router.use('/movie', routerFilms);
router.use('/user', routerUser);

module.exports = router;