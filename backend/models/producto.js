const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },

    descripcion:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },

    color:{
        type:String,
        required:false
    },

    largo:{
        type:String,
        required:false  
    },

    categoria:{
        type:String,
        required:true
    },

    stock:{
        type:Number,
        default:0
    },

    imagen:{
        type:String,
        required:true
    },

    destacado:{
        type:Boolean,
        default:false
    },

    activo:{
        type:Boolean,
        default:true
    }

},
//MongoDB guardará automáticamente:
{
    timestamps:true
});

module.exports = mongoose.model("Producto", productoSchema);