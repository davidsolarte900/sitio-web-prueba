const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    completado:{
        type:Boolean,
        default: false
    },
    usuario:{
        type: monogoose.Schema.types.objectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('task, taskSchema');
