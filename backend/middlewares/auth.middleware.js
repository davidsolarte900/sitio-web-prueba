const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token =req.header('Autorization');

    if(!token) {
        return res.status(401).json({
            msg: 'no hay token'
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();
        
    } catch(error) {
        return res.status(401).json({
            msg: 'token invalido'
        })
    }
}
