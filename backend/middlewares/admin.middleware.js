const verificarAdmin = (req, res, next) => {
    if (req.usuario.rol !== 'admin') {
        return res.status(403).json({
            msg: 'Acceso denegado'
        });
    }
    next();
};

module.exports = verificarAdmin;