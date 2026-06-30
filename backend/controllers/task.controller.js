const Task = require('../models/task');


const crearTarea = async (request, response) => {
    try {
        const task = new Task({
            titulo: request.body.titulo,
            usuario: request.user.id
        });

        await task.save();
        response.json(task);

    } catch (error) {
        return response.status(500).json({ error: `error al crear tarea ${error.message}` });
    }
};

const traerTarea = async (request, response) => {
    try {
        const tasks = await Task.find({
            usuario: request.user.id 
        });

        // .populate('usuario', 'nombre email');


        response.json(tasks);
    } catch (error) {

        return response.status(500).json({ error: `error al traer tareas ${error.message}` });
    }
};

const actualizarTarea = async (request, response) => {
    try {
        const task = await Task.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true }
    );

        response.json(task);
        

    } catch (error) {
        return response.status(500).json({ error: `error al actualizar tarea ${error.message}` });
    }
};


module.exports = {
    crearTarea,
    traerTarea,
    actualizarTarea
};

// falta eliminar tarea
