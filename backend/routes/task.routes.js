const express = require('express');
const router = express.Router();
const validarToken = require('../middlewares/auth.middleware');

const { crearTarea, traerTarea, actualizarTarea } = require('../controllers/task.controller');

router.post('/', validarToken, crearTarea);
router.get('/', validarToken, traerTarea);
router.put('/:id', validarToken, actualizarTarea);
//router.delete('/:id', validarToken, eliminarTarea);

module.exports = router;

