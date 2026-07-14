const Producto = require('../models/producto');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find({ activo: true });
        res.json(productos);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};
// Obtener un producto por id
const obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                msg: 'Producto no encontrado'
            });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

// Crear producto y agregar imagen
const crearProducto = async (req, res) => {
    try {
        const datos = {
            ...req.body,
            imagen: req.file ? req.file.filename : ''
        };
        const producto = new Producto(datos);
        await producto.save();
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

// Actualizar producto
const actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(producto);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }

};
// Eliminado lógico
const eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndUpdate(
            req.params.id,
            {
                activo: false
            }
        );
        res.json({
            msg: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

module.exports = {

    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto

}
