const Producto = require('../models/Producto');

// Obtener todos los productos del catálogo
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error });
    }
};

// Agregar un nuevo producto al catálogo
const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el producto', error });
    }
};

module.exports = {
    obtenerProductos,
    crearProducto
};
