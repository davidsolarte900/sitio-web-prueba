const jwt = require('jsonwebtoken');
const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token'
        });
    }

    try {
        const decoded = jwt.verify(
    token.replace('Bearer ', ''),
    process.env.JWT_SECRET
);

console.log('TOKEN DECODIFICADO:', decoded);

req.usuario = decoded;

next();
    } catch (error) {
        return res.status(401).json({
            msg: 'Token inválido'
        });
    }
};

module.exports = verificarToken;
