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
        return response.status(500).json({ error: `error al mandar tarea ${error.message}` });
    }
};

module.exports = {
    crearTarea
};

