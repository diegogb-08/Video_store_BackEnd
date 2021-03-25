const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';

/* This function is to verify the token of the user
when rendering the future appointments or deleten them */

const auth =  async (req, res, next) => {
    try{
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1]
        const payload = jwt.verify(token,secret)
        if(!payload){
            throw new Error('Cannot be verified')
        }
        const userId = req.params.id
        if (userId != payload.userId){
            throw new Error('User cannot be verified')
        }
        next()
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
}

module.exports = auth;