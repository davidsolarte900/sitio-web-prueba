const verificarToken = require('../middlewares/auth.middleware');
const verificarAdmin = require('../middlewares/admin.middleware');
const upload = require('../middlewares/upload.middleware');

const express = require('express');
const router = express.Router();

const {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/producto.controller');

// Públicas
router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);

// Solo administrador
router.post(
    '/',
    verificarToken,
    verificarAdmin,
    upload.single('imagen'),
    crearProducto
);

router.put(
    '/:id',
    verificarToken,
    verificarAdmin,
    actualizarProducto
);

router.delete(
    '/:id',
    verificarToken,
    verificarAdmin,
    eliminarProducto
);

module.exports = router;