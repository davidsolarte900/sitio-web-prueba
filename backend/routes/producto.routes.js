const express = require('express');
const router = express.Router();
const { obtenerProductos, crearProducto } = require('../controllers/producto.controller');

// Rutas para /api/productos
router.get('/', obtenerProductos);
router.post('/', crearProducto);

module.exports = router;
