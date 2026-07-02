const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: 0
    },
    imagen: {
        type: String, // Aquí guardarás la URL o ruta de la imagen
        default: ''
    },
    stock: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // Crea automáticamente campos "createdAt" y "updatedAt"
});

module.exports = mongoose.model('Producto', ProductoSchema);
